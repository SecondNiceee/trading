"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Key, Eye, EyeOff, X, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"



// Конфигурация API
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "/api/auth"

// Утилиты для работы с токенами и данными пользователя
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  // 1. Проверяем глобальную переменную (установленную в handleSubmit)
  if ((window as any).__AUTH_TOKEN__) {
    return (window as any).__AUTH_TOKEN__;
  }
  
  // 2. Проверяем httpOnly cookie через API endpoint
  // (Для безопасности, httpOnly cookies нельзя прочитать напрямую из JS)
  
  // 3. Проверяем localStorage как fallback
  try {
    const authData = localStorage.getItem('auth_data');
    if (authData) {
      const { token, expiresAt } = JSON.parse(authData);
      if (expiresAt > Date.now()) {
        return token;
      }
      // Если токен просрочен, удаляем только его
      localStorage.removeItem('auth_data');
    }
  } catch (e) {
    // При ошибке просто игнорируем
  }
  
  return null;
};

const getUserEmail = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  // 1. Проверяем глобальную переменную
  if ((window as any).__USER_EMAIL__) {
    return (window as any).__USER_EMAIL__;
  }
  
  // 2. Проверяем localStorage
  try {
    const email = localStorage.getItem('user_email');
    if (email) {
      return email;
    }
    
    // 3. Проверяем user_data если email не найден отдельно
    const userData = localStorage.getItem('user_data');
    if (userData) {
      const user = JSON.parse(userData);
      if (user.email) {
        return user.email;
      }
    }
  } catch (e) {
    // При ошибке просто игнорируем
  }
  
  return null;
};

const getUserData = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
    return localStorage.getItem('user_status');
  } catch (e) {
    return null;
  }
};

// Улучшенная функция сохранения токена
const saveAuthToken = (token: string, rememberMe: boolean = true) => {
  if (typeof window === 'undefined') return;
  
  const maxAge = rememberMe ? 60 * 60 * 24 * 7 : 60 * 60 * 2; // 7 дней или 2 часа
  
  // 1. Устанавливаем глобальную переменную для быстрого доступа
  (window as any).__AUTH_TOKEN__ = token;
  
  // 2. Сохраняем в localStorage для метаданных и быстрого доступа
  const authData = {
    token,
    expiresAt: Date.now() + maxAge * 1000,
    timestamp: Date.now()
  };
  localStorage.setItem('auth_data', JSON.stringify(authData));
};

// Улучшенная функция сохранения данных пользователя
const saveUserData = (user: any, email: string, rememberMe: boolean = true) => {
  if (typeof window === 'undefined') return;
  
  // 1. Устанавливаем глобальную переменную для email
  (window as any).__USER_EMAIL__ = email;
  
  // 2. Сохраняем email отдельно для быстрого доступа
  localStorage.setItem('user_email', email);
  
  // 3. Сохраняем полные данные пользователя
  if (user) {
    const userData = {
      ...user,
      email,
      timestamp: Date.now()
    };
    localStorage.setItem('user_data', JSON.stringify(userData));
  }
  
  // 4. Для дополнительной надежности, можно отправить email на бэкенд для сохранения в сессии
  // Это зависит от вашей архитектуры бэкенда
};

// Функция очистки всех данных аутентификации
const clearAuthData = () => {
  if (typeof window === 'undefined') return;
  
  console.log('clearAuthData called - before:', {
    auth_data: localStorage.getItem('auth_data'),
    user_email: localStorage.getItem('user_email'),
    AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN'),
    USER_EMAIL: localStorage.getItem('USER_EMAIL'),
    USER_STATUS: localStorage.getItem('user_status')
  });
  
  // Удаляем глобальные переменные
  delete (window as any).__AUTH_TOKEN__;
  delete (window as any).__USER_EMAIL__;
  
  // Очищаем localStorage - используем цикл для гарантии удаления
  const keysToRemove = ['auth_data', 'user_email', 'user_data', 'AUTH_TOKEN', 'USER_EMAIL', 'user_status'];
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
  
  console.log('clearAuthData called - after:', {
    auth_data: localStorage.getItem('auth_data'),
    user_email: localStorage.getItem('user_email'),
    AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN'),
    USER_EMAIL: localStorage.getItem('USER_EMAIL'),
    USER_STATUS: localStorage.getItem('user_status')
  });
  
  // Очищаем cookie (только если они не httpOnly)
  document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=lax";
};
interface AuthDialogProps {
  trigger?: React.ReactNode
  defaultMode?: "login" | "signup"
  onAuthSuccess?: () => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
export function AuthDialog({ trigger, defaultMode = "signup", onAuthSuccess, open: controlledOpen, onOpenChange }: AuthDialogProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [internalOpen, setInternalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  // Используем контролируемое состояние если передано, иначе внутреннее
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen = onOpenChange || setInternalOpen

  // Эффект для проверки уже авторизованного пользователя


  // Загрузка сохраненных данных при монтировании
  useEffect(() => {
    if (open) {
      const savedEmail = getUserEmail();
      if (savedEmail && mode === "login") {
        setEmail(savedEmail);
      }
    }
  }, [open, mode]);

  // Обработка скролла
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  // Добавляем useEffect для установки английского языка формы
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const form = document.querySelector('form');
      if (form) {
        form.setAttribute('lang', 'en');
      }
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Валидация пустых полей
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    // Валидация email
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    // Валидация пустого пароля
    if (!password.trim()) {
      toast({
        title: "Password required",
        description: "Please enter your password",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    // Валидация минимальной длины пароля
    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Minimum 6 characters required",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    // Валидация паролей для регистрации
    if (mode === "signup") {
      if (!confirmPassword.trim()) {
        toast({
          title: "Password confirmation required",
          description: "Please confirm your password",
          variant: "destructive"
        })
        setIsLoading(false)
        return
      }

      if (confirmPassword.length < 6) {
        toast({
          title: "Password confirmation too short",
          description: "Minimum 6 characters required",
          variant: "destructive"
        })
        setIsLoading(false)
        return
      }

      if (password !== confirmPassword) {
        toast({
          title: "Password mismatch",
          description: "Passwords do not match",
          variant: "destructive"
        })
        setIsLoading(false)
        return
      }
    }

    try {
      const payload = mode === "signup" 
        ? { email, password, confirm: confirmPassword }
        : { email, password }

      const res = await fetch(
        `${API_BASE}/${mode === "signup" ? "signup" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )

      let data
      try {
        data = await res.json()
      } catch {
        throw new Error(`Server error: ${res.status} ${res.statusText}`)
      }

      if (!res.ok) {
        throw new Error(data.message || `Authentication failed: ${res.status}`)
      }
      if (data.status !== undefined) {
        localStorage.setItem('user_status', data.status);
      }
      localStorage.setItem("AUTH_TOKEN", data.access_token)
      localStorage.setItem("USER_EMAIL", email)
      if (data.access_token) {
        // 1. Сохраняем токен
        saveAuthToken(data.access_token, rememberMe);
        
        // 2. Сохраняем данные пользователя и email
        saveUserData(data.user, email, rememberMe);
        
        // 3. Устанавливаем токен в глобальную переменную для запросов
        (window as any).__AUTH_TOKEN__ = data.access_token;
        
        // 4. Для безопасности, очищаем поля ввода
        setPassword("");
        setConfirmPassword("");
      }

      toast({
        title: "Success!",
        description: `Redirecting to your dashboard...`,
      })

      setOpen(false)
      onAuthSuccess?.()
      const redirectPath = data.status === "verify" ? "/analyze" : "/offer";
      router.push(redirectPath);
      router.refresh();
      
    } catch (e: any) {
      let errorMessage = e.message || "Please try again later";
      
      if (errorMessage.includes('401') || errorMessage.includes('403')) {
        errorMessage = "Invalid credentials. Please check your email and password.";
        // При ошибках аутентификации очищаем поля пароля
        setPassword("");
        setConfirmPassword("");
      } else if (errorMessage.includes('409')) {
        errorMessage = "Email already exists. Please login or use a different email.";
      }

      toast({
        title: mode === "signup" ? "Registration failed" : "Login failed",
        description: errorMessage,
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Функция выхода из системы
  const handleLogout = () => {
    console.log('handleLogout called');
    
    // Сначала закрываем диалог
    setOpen(false);
    
    // Затем очищаем данные
    clearAuthData();
    
    // Показываем уведомление
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    // Редирект с небольшой задержкой для завершения очистки
    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        showCloseButton={false}
        className="max-w-[500px] w-[calc(100vw-2rem)] sm:w-full border-2 border-[#5F0BE8]/50 bg-gradient-to-br from-[#1a0f2e] to-[#0f0820] p-6 sm:p-8 shadow-[0_0_60px_rgba(95,11,232,0.4)] backdrop-blur-xl"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#5F0BE8] flex items-center justify-center text-white hover:from-[#7c3aed] hover:to-[#4f46e5] transition-all shadow-lg z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Welcome</h2>
            <p className="text-gray-300 text-sm sm:text-base">Hi, you need to register to enter</p>
          </div>

          <div className="flex gap-2 p-1 bg-[#0f0820]/60 rounded-full border border-[#5F0BE8]/30">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-3 px-6 rounded-full text-base font-semibold transition-all ${
                mode === "login"
                  ? "bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-3 px-6 rounded-full text-base font-semibold transition-all ${
                mode === "signup"
                  ? "bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="space-y-3">
              <label className="text-white text-base font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="John123@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-12 pr-4 bg-[#1a0f2e]/80 border-[#5F0BE8]/30 text-white placeholder:text-gray-500 rounded-3xl text-base focus-visible:border-[#5F0BE8] focus-visible:ring-[#5F0BE8]/30"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-white text-base font-medium">
                {mode === "signup" ? "Create Password" : "Password"}
              </label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 pl-12 pr-12 bg-[#1a0f2e]/80 border-[#5F0BE8]/30 text-white placeholder:text-gray-500 rounded-3xl text-base focus-visible:border-[#5F0BE8] focus-visible:ring-[#5F0BE8]/30"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {mode === "signup" && (
              <div className="space-y-3">
                <label className="text-white text-base font-medium">Confirm Password</label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-14 pl-12 pr-12 bg-[#1a0f2e]/80 border-[#5F0BE8]/30 text-white placeholder:text-gray-500 rounded-3xl text-base focus-visible:border-[#5F0BE8] focus-visible:ring-[#5F0BE8]/30"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Опция "Запомнить меня" - только для логина */}
            {mode === "login" && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#5F0BE8]/30 bg-[#1a0f2e] text-[#5F0BE8] focus:ring-[#5F0BE8]"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-300">
                  Remember me for 7 days
                </label>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full h-14 bg-gradient-to-r from-[#6D1D7D] via-[#7C3AED] to-[#5F0BE8] hover:from-[#5F0BE8] hover:via-[#6D28D9] hover:to-[#6D1D7D] text-white text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(95,11,232,0.5)] transition-all ${
                isLoading ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </div>
              ) : mode === "signup" ? (
                "Sign Up"
              ) : (
                "Login"
              )}
            </Button>

            {/* Кнопка выхода для уже авторизованных пользователей */}
            {getAuthToken() && (
              <div className="text-center pt-4 border-t border-[#5F0BE8]/30">
                <p className="text-gray-400 text-sm mb-2">
                  Logged in as: <span className="text-purple-400 font-medium">{getUserEmail()}</span>
                </p>
                <Button
                  type="button"
                  onClick={handleLogout}
                  variant="outline"
                  className="text-red-400 hover:text-red-300 border-red-500/30 hover:border-red-500/50"
                >
                  Logout
                </Button>
              </div>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
