"use client"

import type React from "react"

import { useState, useEffect } from "react"

// Компонент-обертка для основного контента
// Добавляет отступ слева только когда пользователь залогинен (чтобы контент не перекрывался sidebar)
// Когда пользователь НЕ залогинен - sidebar скрыт, отступ не нужен

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  // TODO: Заменить на реальную проверку авторизации
  // Например: const { user } = useAuth() или получение из контекста/сессии
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Имитация проверки авторизации
    // В реальном приложении здесь будет проверка сессии/токена
    const checkAuth = () => {
      const loggedIn = false // Замените на реальную проверку
      setIsLoggedIn(loggedIn)
    }
    checkAuth()
  }, [])

  return (
    <div
      className={
        isLoggedIn
          ? "pl-0 md:pl-[68px] rtl:pr-0 rtl:md:pr-[68px] rtl:md:pl-0" // С отступом для sidebar
          : "" // Без отступа - sidebar скрыт
      }
    >
      {children}
    </div>
  )
}
