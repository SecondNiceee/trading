export type Locale = "en" | "es" | "pt" | "ar"

export const translations = {
  en: {
    // Common
    common: {
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      verified: "VERIFIED",
      years: "years",
      yearsOld: "years old",
      calculate: "Calculate",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "Trade like a",
      pro: "Pro",
      title2: "without much",
      guru: "trading experience",
      description:
        "AI-powered chart analysis that delivers actionable trade plans. Upload your charts and get instant insights for better trading decisions.",
      analyzeButton: "Analyze a Chart",
    },

    // How It Works
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple, fast and powerful chart analysis in three steps",
      step1Title: "1. Upload Chart",
      step1Desc: "Upload your trading chart screenshot or image from any platform",
      step2Title: "2. AI Analysis",
      step2Desc: "Our AI analyzes patterns, levels, and market structure instantly",
      step3Title: "3. Trade Plan",
      step3Desc: "Get actionable insights with entry, stop loss, and take profit levels",
    },

    // Powerful Features - Removed journaling
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need for successful trading analysis",
      aiTrade: "AI Trade Analysis",
      aiTradeDesc: "Advanced pattern recognition and market structure analysis powered by artificial intelligence",
      scalp: "Scalp Trading",
      scalpDesc: "Ultra-short term trading opportunities for quick profits with precision timing",
      risk: "Risk Management",
      riskDesc: "Advanced position sizing and risk calculation tools to protect your capital",
      swing: "Swing Trading",
      swingDesc: "Multi-day to multi-week trading opportunities analysis for strategic positions",
      priceAction: "Price Action Analysis",
      priceActionDesc: "Deep analysis of price movements and market psychology for informed decisions",
    },

    // Testimonials - Replaced NEXTGREEN with FoMatrix
    testimonials: {
      title: "What our traders are saying",
      trader1Name: "Roberto Lima",
      trader1Role: "Day Trader",
      trader1Quote:
        "After 10 years on the market, finally find a tool that really it works. My results have improved 300%!",
      trader2Name: "Isabella Alves",
      trader2Role: "Swing Trader",
      trader2Quote:
        "As the mother of two children, I need fast and efficient analysis. FoMatrix allows me to operate in the intervals of my day!",
      trader3Name: "Carlos Eduardo",
      trader3Role: "Scalper",
      trader3Quote:
        "Economics student who does trading to pay for college. With FoMatrix, I can be consistent in operations!",
    },

    // Sidebar
    sidebar: {
      analysis: "Analysis",
      learning: "Learning",
      tradingReview: "Trading Review",
      settings: "Settings",
    },

    // Settings
    settings: {
      userPreferences: "User Preferences",
      language: "Language",
      timezone: "Timezone",
      displayCurrency: "Display Currency",
      savePreferences: "Save Preferences",
      saving: "Saving...",
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      updatePassword: "Update Password",
      updating: "Updating...",
      enterCurrentPassword: "Enter your current password",
      enterNewPassword: "Enter your new password",
      confirmNewPassword: "Confirm your new password",
      minChars: "Minimum 6 characters required",
      preferencesSaved: "Preferences saved",
      preferencesDesc: "Your preferences have been updated successfully.",
      passwordUpdated: "Password updated",
      passwordDesc: "Your password has been changed successfully.",
      passwordMismatch: "Passwords do not match.",
      passwordTooShort: "Password must be at least 6 characters.",
      selectLanguage: "Select language",
      selectTimezone: "Select timezone",
      selectCurrency: "Select currency",
    },

    // Auth Dialog
    auth: {
      welcome: "Welcome",
      registerPrompt: "Hi, you need to register to enter",
      emailAddress: "Email Address",
      createPassword: "Create Password",
      password: "Password",
      rememberMe: "Remember me for 7 days",
      loggedInAs: "Logged in as:",
      emailRequired: "Email required",
      emailRequiredDesc: "Please enter your email address",
      invalidEmail: "Invalid email",
      invalidEmailDesc: "Please enter a valid email address",
      passwordRequired: "Password required",
      passwordRequiredDesc: "Please enter your password",
      passwordTooShort: "Password too short",
      passwordTooShortDesc: "Minimum 6 characters required",
      confirmRequired: "Password confirmation required",
      confirmRequiredDesc: "Please confirm your password",
      passwordMismatch: "Password mismatch",
      passwordMismatchDesc: "Passwords do not match",
      redirecting: "Redirecting to your dashboard...",
      registrationFailed: "Registration failed",
      loginFailed: "Login failed",
      loggedOut: "Logged out",
      loggedOutDesc: "You have been successfully logged out",
    },

    // Analyze Page
    analyze: {
      title: "Trading Analysis",
      uploadTitle: "Upload Chart Image",
      uploadDesc: "Drag and drop your trading chart screenshot or click to browse",
      supportedFormats: "Supported formats: JPG, PNG, GIF (max 5MB)",
      analyzing: "Analyzing...",
      analyzeChart: "Analyze Chart",
      removeImage: "Remove image",
      confidence: "Confluence",
      buy: "BUY",
      sell: "SELL",
      noSignal: "NO SIGNAL",
      analysisResult: "Analysis Result",
      pleaseLogin: "Please login to use the analysis feature",
      invalidFile: "Invalid file type",
      invalidFileDesc: "Please upload an image file (JPG, PNG, GIF)",
      fileTooLarge: "File size too large",
      fileTooLargeDesc: "File size exceeds 5MB limit",
      activateAccount: "Activate Account",
      activateDesc: "Link your broker account to continue using the analysis feature",
    },

    // Learning Page
    learning: {
      title: "Learning",
      center: "Center",
      comingSoon:
        "Educational content and trading tutorials coming soon. Stay tuned for comprehensive learning materials.",
    },

    // Trading Review Page
    tradingReview: {
      title: "Trading",
      review: "Review",
      description: "Share your trading experience and feedback with us. Your insights help us improve our services.",
      yourReview: "Your Review",
      placeholder: "Write your trading review here...",
      attachImage: "Attach Image (optional)",
      dragDrop: "Drag & drop an image or click to browse",
      fileLimit: "JPG, PNG, GIF up to 5MB",
      submitReview: "Submit Review",
      submitting: "Submitting...",
      reviewSubmitted: "Review submitted!",
      thankYou: "Thank you for your feedback",
      enterReview: "Please enter your review",
      failedSubmit: "Failed to submit review",
      tryAgain: "Please try again later",
    },

    // Offer Page
    offer: {
      tradeSmarter: "Trade",
      smarter: "Smarter",
      notHarder: "Not",
      harder: "Harder",
      description:
        "Upload your trading chart from any platform and let our AI instantly analyze patterns, levels, and market structure. Receive actionable trade plans with entry points, stop loss, and take profit levels—no guru required.",
      specialOffer: "Special Offer",
      startAnalysis: "Start Chart Analysis",
      linkBroker: "Link Broker Account",
      freeAnalyses: "Free",
      startWith3: "Start with 3",
      analyses: "Analyses",
      freeTrialDesc: "Try it out with three completely free chart analyses to see the value for yourself.",
      unlockAccess: "Unlock Full Access",
      afterFree: "After your free analyses, you'll need to:",
      step1: "Open an account with one of our",
      partneredBrokers: "partnered brokers",
      step1End: "via the link provided.",
      step2: "Maintain a",
      minDeposit: "minimum deposit",
      of50: "of",
      step2End: "to continue accessing AI trade plans.",
      confidence: "confidence",
    },

    // Register Page
    register: {
      brokerAccess: "Broker",
      accessRequirements: "Access",
      requirements: "Requirements",
      step1: "Register with one of our partner brokers using the link provided.",
      step2: "Make a minimum deposit of $50 to activate your trading account.",
      step3: "After registration, please write your ID below",
      registration: "Registration",
      alreadyHaveAccount: "Already have an account? Enter your ID below",
      enterAccountId: "Enter Your Account ID",
      enterId: "Enter your ID",
      tooManyRequests: "Too many requests. Please try again later.",
      registrationSuccess: "Your account ID has been successfully registered!",
      registrationFailed: "Registration failed",
    },
  },

  es: {
    // Common
    common: {
      login: "Iniciar Sesión",
      signup: "Registrarse",
      logout: "Cerrar Sesión",
      save: "Guardar",
      cancel: "Cancelar",
      submit: "Enviar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      verified: "VERIFICADO",
      years: "años",
      yearsOld: "años",
      calculate: "Calcular",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "Opera como un",
      pro: "Profesional",
      title2: "sin mucha",
      guru: "experiencia en trading",
      description:
        "Análisis de gráficos impulsado por IA que ofrece planes de trading accionables. Sube tus gráficos y obtén información instantánea para mejores decisiones de trading.",
      analyzeButton: "Analizar un Gráfico",
    },

    // How It Works
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Análisis de gráficos simple, rápido y potente en tres pasos",
      step1Title: "1. Subir Gráfico",
      step1Desc: "Sube tu captura de pantalla del gráfico de trading desde cualquier plataforma",
      step2Title: "2. Análisis IA",
      step2Desc: "Nuestra IA analiza patrones, niveles y estructura del mercado instantáneamente",
      step3Title: "3. Plan de Trading",
      step3Desc: "Obtén información accionable con niveles de entrada, stop loss y take profit",
    },

    // Powerful Features - Removed journaling
    features: {
      title: "Funciones Potentes",
      subtitle: "Todo lo que necesitas para un análisis de trading exitoso",
      aiTrade: "Análisis de Trading con IA",
      aiTradeDesc:
        "Reconocimiento avanzado de patrones y análisis de estructura de mercado impulsado por inteligencia artificial",
      scalp: "Scalp Trading",
      scalpDesc: "Oportunidades de trading a ultra corto plazo para ganancias rápidas con timing preciso",
      risk: "Gestión de Riesgo",
      riskDesc: "Herramientas avanzadas de dimensionamiento de posición y cálculo de riesgo para proteger tu capital",
      swing: "Swing Trading",
      swingDesc: "Análisis de oportunidades de trading de varios días a varias semanas para posiciones estratégicas",
      priceAction: "Análisis de Acción del Precio",
      priceActionDesc: "Análisis profundo de movimientos de precio y psicología del mercado para decisiones informadas",
    },

    // Testimonials - Replaced NEXTGREEN with FoMatrix
    testimonials: {
      title: "Lo que dicen nuestros traders",
      trader1Name: "Roberto Lima",
      trader1Role: "Day Trader",
      trader1Quote:
        "¡Después de 10 años en el mercado, finalmente encontré una herramienta que realmente funciona. Mis resultados han mejorado un 300%!",
      trader2Name: "Isabella Alves",
      trader2Role: "Swing Trader",
      trader2Quote:
        "Como madre de dos hijos, necesito análisis rápido y eficiente. ¡FoMatrix me permite operar en los intervalos de mi día!",
      trader3Name: "Carlos Eduardo",
      trader3Role: "Scalper",
      trader3Quote:
        "Estudiante de economía que hace trading para pagar la universidad. ¡Con FoMatrix, puedo ser consistente en las operaciones!",
    },

    // Sidebar
    sidebar: {
      analysis: "Análisis",
      learning: "Aprendizaje",
      tradingReview: "Reseña de Trading",
      settings: "Configuración",
    },

    // Settings
    settings: {
      userPreferences: "Preferencias de Usuario",
      language: "Idioma",
      timezone: "Zona Horaria",
      displayCurrency: "Moneda de Visualización",
      savePreferences: "Guardar Preferencias",
      saving: "Guardando...",
      changePassword: "Cambiar Contraseña",
      currentPassword: "Contraseña Actual",
      newPassword: "Nueva Contraseña",
      confirmPassword: "Confirmar Contraseña",
      updatePassword: "Actualizar Contraseña",
      updating: "Actualizando...",
      enterCurrentPassword: "Ingresa tu contraseña actual",
      enterNewPassword: "Ingresa tu nueva contraseña",
      confirmNewPassword: "Confirma tu nueva contraseña",
      minChars: "Mínimo 6 caracteres requeridos",
      preferencesSaved: "Preferencias guardadas",
      preferencesDesc: "Tus preferencias se han actualizado correctamente.",
      passwordUpdated: "Contraseña actualizada",
      passwordDesc: "Tu contraseña se ha cambiado correctamente.",
      passwordMismatch: "Las contraseñas no coinciden.",
      passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
      selectLanguage: "Seleccionar idioma",
      selectTimezone: "Seleccionar zona horaria",
      selectCurrency: "Seleccionar moneda",
    },

    // Auth Dialog
    auth: {
      welcome: "Bienvenido",
      registerPrompt: "Hola, necesitas registrarte para entrar",
      emailAddress: "Correo Electrónico",
      createPassword: "Crear Contraseña",
      password: "Contraseña",
      rememberMe: "Recordarme por 7 días",
      loggedInAs: "Conectado como:",
      emailRequired: "Correo requerido",
      emailRequiredDesc: "Por favor ingresa tu correo electrónico",
      invalidEmail: "Correo inválido",
      invalidEmailDesc: "Por favor ingresa un correo electrónico válido",
      passwordRequired: "Contraseña requerida",
      passwordRequiredDesc: "Por favor ingresa tu contraseña",
      passwordTooShort: "Contraseña muy corta",
      passwordTooShortDesc: "Mínimo 6 caracteres requeridos",
      confirmRequired: "Confirmación requerida",
      confirmRequiredDesc: "Por favor confirma tu contraseña",
      passwordMismatch: "Contraseñas no coinciden",
      passwordMismatchDesc: "Las contraseñas no coinciden",
      redirecting: "Redirigiendo a tu panel...",
      registrationFailed: "Registro fallido",
      loginFailed: "Inicio de sesión fallido",
      loggedOut: "Sesión cerrada",
      loggedOutDesc: "Has cerrado sesión correctamente",
    },

    // Analyze Page
    analyze: {
      title: "Análisis de Trading",
      uploadTitle: "Subir Imagen del Gráfico",
      uploadDesc: "Arrastra y suelta tu captura del gráfico de trading o haz clic para buscar",
      supportedFormats: "Formatos soportados: JPG, PNG, GIF (máx 5MB)",
      analyzing: "Analizando...",
      analyzeChart: "Analizar Gráfico",
      removeImage: "Eliminar imagen",
      confidence: "Confluencia",
      buy: "COMPRAR",
      sell: "VENDER",
      noSignal: "SIN SEÑAL",
      analysisResult: "Resultado del Análisis",
      pleaseLogin: "Por favor inicia sesión para usar la función de análisis",
      invalidFile: "Tipo de archivo inválido",
      invalidFileDesc: "Por favor sube un archivo de imagen (JPG, PNG, GIF)",
      fileTooLarge: "Archivo muy grande",
      fileTooLargeDesc: "El archivo excede el límite de 5MB",
      activateAccount: "Activar Cuenta",
      activateDesc: "Vincula tu cuenta de broker para continuar usando la función de análisis",
    },

    // Learning Page
    learning: {
      title: "Centro de",
      center: "Aprendizaje",
      comingSoon:
        "Contenido educativo y tutoriales de trading próximamente. Mantente atento a materiales de aprendizaje completos.",
    },

    // Trading Review Page
    tradingReview: {
      title: "Reseña de",
      review: "Trading",
      description:
        "Comparte tu experiencia de trading y comentarios con nosotros. Tus opiniones nos ayudan a mejorar nuestros servicios.",
      yourReview: "Tu Reseña",
      placeholder: "Escribe tu reseña de trading aquí...",
      attachImage: "Adjuntar Imagen (opcional)",
      dragDrop: "Arrastra y suelta una imagen o haz clic para buscar",
      fileLimit: "JPG, PNG, GIF hasta 5MB",
      submitReview: "Enviar Reseña",
      submitting: "Enviando...",
      reviewSubmitted: "¡Reseña enviada!",
      thankYou: "Gracias por tus comentarios",
      enterReview: "Por favor ingresa tu reseña",
      failedSubmit: "Error al enviar reseña",
      tryAgain: "Por favor intenta más tarde",
    },

    // Offer Page
    offer: {
      tradeSmarter: "Opera",
      smarter: "Inteligentemente",
      notHarder: "No",
      harder: "Difícilmente",
      description:
        "Sube tu gráfico de trading desde cualquier plataforma y deja que nuestra IA analice instantáneamente patrones, niveles y estructura del mercado. Recibe planes de trading accionables con puntos de entrada, stop loss y niveles de take profit, sin necesidad de gurú.",
      specialOffer: "Oferta Especial",
      startAnalysis: "Iniciar Análisis de Gráfico",
      linkBroker: "Vincular Cuenta de Broker",
      freeAnalyses: "Gratis",
      startWith3: "Comienza con 3",
      analyses: "Análisis",
      freeTrialDesc: "Pruébalo con tres análisis de gráficos completamente gratis para ver el valor por ti mismo.",
      unlockAccess: "Desbloquear Acceso Completo",
      afterFree: "Después de tus análisis gratuitos, necesitarás:",
      step1: "Abrir una cuenta con uno de nuestros",
      partneredBrokers: "brokers asociados",
      step1End: "a través del enlace proporcionado.",
      step2: "Mantener un",
      minDeposit: "depósito mínimo",
      of50: "de",
      step2End: "para continuar accediendo a los planes de trading con IA.",
      confidence: "confianza",
    },

    // Register Page
    register: {
      brokerAccess: "Requisitos de",
      accessRequirements: "Acceso al",
      requirements: "Broker",
      step1: "Regístrate con uno de nuestros brokers asociados usando el enlace proporcionado.",
      step2: "Realiza un depósito mínimo de $50 para activar tu cuenta de trading.",
      step3: "Después del registro, por favor escribe tu ID abajo",
      registration: "Registro",
      alreadyHaveAccount: "¿Ya tienes una cuenta? Ingresa tu ID abajo",
      enterAccountId: "Ingresa Tu ID de Cuenta",
      enterId: "Ingresa tu ID",
      tooManyRequests: "Demasiadas solicitudes. Por favor intenta más tarde.",
      registrationSuccess: "¡Tu ID de cuenta se ha registrado correctamente!",
      registrationFailed: "Registro fallido",
    },
  },

  pt: {
    // Common
    common: {
      login: "Entrar",
      signup: "Cadastrar",
      logout: "Sair",
      save: "Salvar",
      cancel: "Cancelar",
      submit: "Enviar",
      loading: "Carregando...",
      error: "Erro",
      success: "Sucesso",
      verified: "VERIFICADO",
      years: "anos",
      yearsOld: "anos",
      calculate: "Calcular",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "Opere como um",
      pro: "Profissional",
      title2: "sem muita",
      guru: "experiência em trading",
      description:
        "Análise de gráficos com IA que entrega planos de trading acionáveis. Envie seus gráficos e obtenha insights instantâneos para melhores decisões de trading.",
      analyzeButton: "Analisar um Gráfico",
    },

    // How It Works
    howItWorks: {
      title: "Como Funciona",
      subtitle: "Análise de gráficos simples, rápida e poderosa em três passos",
      step1Title: "1. Enviar Gráfico",
      step1Desc: "Envie sua captura de tela do gráfico de trading de qualquer plataforma",
      step2Title: "2. Análise IA",
      step2Desc: "Nossa IA analisa padrões, níveis e estrutura de mercado instantaneamente",
      step3Title: "3. Plano de Trading",
      step3Desc: "Obtenha insights acionáveis com níveis de entrada, stop loss e take profit",
    },

    // Powerful Features - Removed journaling
    features: {
      title: "Recursos Poderosos",
      subtitle: "Tudo que você precisa para uma análise de trading bem-sucedida",
      aiTrade: "Análise de Trading com IA",
      aiTradeDesc:
        "Reconhecimento avançado de padrões e análise de estrutura de mercado alimentada por inteligência artificial",
      scalp: "Scalp Trading",
      scalpDesc: "Oportunidades de trading de ultra curto prazo para lucros rápidos com timing preciso",
      risk: "Gestão de Risco",
      riskDesc: "Ferramentas avançadas de dimensionamento de posição e cálculo de risco para proteger seu capital",
      swing: "Swing Trading",
      swingDesc: "Análise de oportunidades de trading de vários dias a várias semanas para posições estratégicas",
      priceAction: "Análise de Price Action",
      priceActionDesc: "Análise profunda de movimentos de preço e psicologia de mercado para decisões informadas",
    },

    // Testimonials - Replaced NEXTGREEN with FoMatrix
    testimonials: {
      title: "O que nossos traders estão dizendo",
      trader1Name: "Roberto Lima",
      trader1Role: "Day Trader",
      trader1Quote:
        "Após 10 anos no mercado, finalmente encontrei uma ferramenta que realmente funciona. Meus resultados melhoraram 300%!",
      trader2Name: "Isabella Alves",
      trader2Role: "Swing Trader",
      trader2Quote:
        "Como mãe de dois filhos, preciso de análise rápida e eficiente. FoMatrix me permite operar nos intervalos do meu dia!",
      trader3Name: "Carlos Eduardo",
      trader3Role: "Scalper",
      trader3Quote:
        "Estudante de economia que faz trading para pagar a faculdade. Com FoMatrix, consigo ser consistente nas operações!",
    },

    // Sidebar
    sidebar: {
      analysis: "Análise",
      learning: "Aprendizado",
      tradingReview: "Avaliação de Trading",
      settings: "Configurações",
    },

    // Settings
    settings: {
      userPreferences: "Preferências do Usuário",
      language: "Idioma",
      timezone: "Fuso Horário",
      displayCurrency: "Moeda de Exibição",
      savePreferences: "Salvar Preferências",
      saving: "Salvando...",
      changePassword: "Alterar Senha",
      currentPassword: "Senha Atual",
      newPassword: "Nova Senha",
      confirmPassword: "Confirmar Senha",
      updatePassword: "Atualizar Senha",
      updating: "Atualizando...",
      enterCurrentPassword: "Digite sua senha atual",
      enterNewPassword: "Digite sua nova senha",
      confirmNewPassword: "Confirme sua nova senha",
      minChars: "Mínimo de 6 caracteres necessários",
      preferencesSaved: "Preferências salvas",
      preferencesDesc: "Suas preferências foram atualizadas com sucesso.",
      passwordUpdated: "Senha atualizada",
      passwordDesc: "Sua senha foi alterada com sucesso.",
      passwordMismatch: "As senhas não coincidem.",
      passwordTooShort: "A senha deve ter pelo menos 6 caracteres.",
      selectLanguage: "Selecionar idioma",
      selectTimezone: "Selecionar fuso horário",
      selectCurrency: "Selecionar moeda",
    },

    // Auth Dialog
    auth: {
      welcome: "Bem-vindo",
      registerPrompt: "Olá, você precisa se cadastrar para entrar",
      emailAddress: "Endereço de Email",
      createPassword: "Criar Senha",
      password: "Senha",
      rememberMe: "Lembrar-me por 7 dias",
      loggedInAs: "Conectado como:",
      emailRequired: "Email obrigatório",
      emailRequiredDesc: "Por favor, digite seu endereço de email",
      invalidEmail: "Email inválido",
      invalidEmailDesc: "Por favor, digite um endereço de email válido",
      passwordRequired: "Senha obrigatória",
      passwordRequiredDesc: "Por favor, digite sua senha",
      passwordTooShort: "Senha muito curta",
      passwordTooShortDesc: "Mínimo de 6 caracteres necessários",
      confirmRequired: "Confirmação obrigatória",
      confirmRequiredDesc: "Por favor, confirme sua senha",
      passwordMismatch: "Senhas não coincidem",
      passwordMismatchDesc: "As senhas não coincidem",
      redirecting: "Redirecionando para seu painel...",
      registrationFailed: "Cadastro falhou",
      loginFailed: "Login falhou",
      loggedOut: "Desconectado",
      loggedOutDesc: "Você foi desconectado com sucesso",
    },

    // Analyze Page
    analyze: {
      title: "Análise de Trading",
      uploadTitle: "Enviar Imagem do Gráfico",
      uploadDesc: "Arraste e solte sua captura de tela do gráfico ou clique para procurar",
      supportedFormats: "Formatos suportados: JPG, PNG, GIF (máx 5MB)",
      analyzing: "Analisando...",
      analyzeChart: "Analisar Gráfico",
      removeImage: "Remover imagem",
      confidence: "Confluência",
      buy: "COMPRAR",
      sell: "VENDER",
      noSignal: "SEM SINAL",
      analysisResult: "Resultado da Análise",
      pleaseLogin: "Por favor, faça login para usar o recurso de análise",
      invalidFile: "Tipo de arquivo inválido",
      invalidFileDesc: "Por favor, envie um arquivo de imagem (JPG, PNG, GIF)",
      fileTooLarge: "Arquivo muito grande",
      fileTooLargeDesc: "O arquivo excede o limite de 5MB",
      activateAccount: "Ativar Conta",
      activateDesc: "Vincule sua conta de corretora para continuar usando o recurso de análise",
    },

    // Learning Page
    learning: {
      title: "Centro de",
      center: "Aprendizado",
      comingSoon:
        "Conteúdo educacional e tutoriais de trading em breve. Fique atento para materiais de aprendizado completos.",
    },

    // Trading Review Page
    tradingReview: {
      title: "Avaliação de",
      review: "Trading",
      description:
        "Compartilhe sua experiência de trading e feedback conosco. Seus insights nos ajudam a melhorar nossos serviços.",
      yourReview: "Sua Avaliação",
      placeholder: "Escreva sua avaliação de trading aqui...",
      attachImage: "Anexar Imagem (opcional)",
      dragDrop: "Arraste e solte uma imagem ou clique para procurar",
      fileLimit: "JPG, PNG, GIF até 5MB",
      submitReview: "Enviar Avaliação",
      submitting: "Enviando...",
      reviewSubmitted: "Avaliação enviada!",
      thankYou: "Obrigado pelo seu feedback",
      enterReview: "Por favor, digite sua avaliação",
      failedSubmit: "Falha ao enviar avaliação",
      tryAgain: "Por favor, tente novamente mais tarde",
    },

    // Offer Page
    offer: {
      tradeSmarter: "Opere",
      smarter: "Inteligentemente",
      notHarder: "Não",
      harder: "Difícil",
      description:
        "Envie seu gráfico de trading de qualquer plataforma e deixe nossa IA analisar instantaneamente padrões, níveis e estrutura de mercado. Receba planos de trading acionáveis com pontos de entrada, stop loss e níveis de take profit, sem necessidade de guru.",
      specialOffer: "Oferta Especial",
      startAnalysis: "Iniciar Análise de Gráfico",
      linkBroker: "Vincular Conta de Corretora",
      freeAnalyses: "Grátis",
      startWith3: "Comece com 3",
      analyses: "Análises",
      freeTrialDesc: "Experimente com três análises de gráficos completamente grátis para ver o valor por si mesmo.",
      unlockAccess: "Desbloquear Acesso Completo",
      afterFree: "Após suas análises gratuitas, você precisará:",
      step1: "Abrir uma conta com uma de nossas",
      partneredBrokers: "corretoras parceiras",
      step1End: "através do link fornecido.",
      step2: "Manter um",
      minDeposit: "depósito mínimo",
      of50: "de",
      step2End: "para continuar acessando os planos de trading com IA.",
      confidence: "confiança",
    },

    // Register Page
    register: {
      brokerAccess: "Requisitos de",
      accessRequirements: "Acesso à",
      requirements: "Corretora",
      step1: "Cadastre-se com uma de nossas corretoras parceiras usando o link fornecido.",
      step2: "Faça um depósito mínimo de $50 para ativar sua conta de trading.",
      step3: "Após o cadastro, por favor escreva seu ID abaixo",
      registration: "Registro",
      alreadyHaveAccount: "Já tem uma conta? Digite seu ID abaixo",
      enterAccountId: "Digite Seu ID de Conta",
      enterId: "Digite seu ID",
      tooManyRequests: "Muitas solicitações. Por favor, tente novamente mais tarde.",
      registrationSuccess: "Seu ID de conta foi registrado com sucesso!",
      registrationFailed: "Cadastro falhou",
    },
  },

  ar: {
    // Common
    common: {
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      logout: "تسجيل الخروج",
      save: "حفظ",
      cancel: "إلغاء",
      submit: "إرسال",
      loading: "جاري التحميل...",
      error: "خطأ",
      success: "نجاح",
      verified: "موثق",
      years: "سنوات",
      yearsOld: "سنة",
      calculate: "حساب",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "تداول مثل",
      pro: "المحترفين",
      title2: "بدون خبرة كبيرة في",
      guru: "التداول",
      description:
        "تحليل الرسوم البيانية المدعوم بالذكاء الاصطناعي يقدم خطط تداول قابلة للتنفيذ. ارفع رسومك البيانية واحصل على رؤى فورية لقرارات تداول أفضل.",
      analyzeButton: "تحليل الرسم البياني",
    },

    // How It Works
    howItWorks: {
      title: "كيف يعمل",
      subtitle: "تحليل رسوم بيانية بسيط وسريع وقوي في ثلاث خطوات",
      step1Title: "1. رفع الرسم البياني",
      step1Desc: "ارفع لقطة شاشة الرسم البياني للتداول من أي منصة",
      step2Title: "2. تحليل الذكاء الاصطناعي",
      step2Desc: "يحلل ذكاؤنا الاصطناعي الأنماط والمستويات وهيكل السوق فوراً",
      step3Title: "3. خطة التداول",
      step3Desc: "احصل على رؤى قابلة للتنفيذ مع مستويات الدخول ووقف الخسارة وجني الأرباح",
    },

    // Powerful Features - Removed journaling
    features: {
      title: "ميزات قوية",
      subtitle: "كل ما تحتاجه لتحليل تداول ناجح",
      aiTrade: "تحليل التداول بالذكاء الاصطناعي",
      aiTradeDesc: "التعرف المتقدم على الأنماط وتحليل هيكل السوق مدعوم بالذكاء الاصطناعي",
      scalp: "تداول السكالبينج",
      scalpDesc: "فرص تداول قصيرة المدى جداً لأرباح سريعة بتوقيت دقيق",
      risk: "إدارة المخاطر",
      riskDesc: "أدوات متقدمة لتحديد حجم المركز وحساب المخاطر لحماية رأس مالك",
      swing: "تداول السوينج",
      swingDesc: "تحليل فرص التداول من عدة أيام إلى عدة أسابيع للمراكز الاستراتيجية",
      priceAction: "تحليل حركة السعر",
      priceActionDesc: "تحليل عميق لتحركات الأسعار وعلم نفس السوق لقرارات مدروسة",
    },

    // Testimonials - Replaced NEXTGREEN with FoMatrix
    testimonials: {
      title: "ما يقوله متداولونا",
      trader1Name: "روبرتو ليما",
      trader1Role: "متداول يومي",
      trader1Quote: "بعد 10 سنوات في السوق، أخيراً وجدت أداة تعمل حقاً. تحسنت نتائجي بنسبة 300%!",
      trader2Name: "إيزابيلا ألفيس",
      trader2Role: "متداول سوينج",
      trader2Quote: "كأم لطفلين، أحتاج تحليلاً سريعاً وفعالاً. FoMatrix يتيح لي التداول في فترات استراحتي!",
      trader3Name: "كارلوس إدواردو",
      trader3Role: "متداول سكالبينج",
      trader3Quote: "طالب اقتصاد يتداول لدفع رسوم الجامعة. مع FoMatrix، أستطيع أن أكون ثابتاً في العمليات!",
    },

    // Sidebar
    sidebar: {
      analysis: "التحليل",
      learning: "التعلم",
      tradingReview: "مراجعة التداول",
      settings: "الإعدادات",
    },

    // Settings
    settings: {
      userPreferences: "تفضيلات المستخدم",
      language: "اللغة",
      timezone: "المنطقة الزمنية",
      displayCurrency: "عملة العرض",
      savePreferences: "حفظ التفضيلات",
      saving: "جاري الحفظ...",
      changePassword: "تغيير كلمة المرور",
      currentPassword: "كلمة المرور الحالية",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      updatePassword: "تحديث كلمة المرور",
      updating: "جاري التحديث...",
      enterCurrentPassword: "أدخل كلمة المرور الحالية",
      enterNewPassword: "أدخل كلمة المرور الجديدة",
      confirmNewPassword: "أكد كلمة المرور الجديدة",
      minChars: "مطلوب 6 أحرف على الأقل",
      preferencesSaved: "تم حفظ التفضيلات",
      preferencesDesc: "تم تحديث تفضيلاتك بنجاح.",
      passwordUpdated: "تم تحديث كلمة المرور",
      passwordDesc: "تم تغيير كلمة المرور بنجاح.",
      passwordMismatch: "كلمات المرور غير متطابقة.",
      passwordTooShort: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
      selectLanguage: "اختر اللغة",
      selectTimezone: "اختر المنطقة الزمنية",
      selectCurrency: "اختر العملة",
    },

    // Auth Dialog
    auth: {
      welcome: "مرحباً",
      registerPrompt: "مرحباً، تحتاج للتسجيل للدخول",
      emailAddress: "عنوان البريد الإلكتروني",
      createPassword: "إنشاء كلمة مرور",
      password: "كلمة المرور",
      rememberMe: "تذكرني لمدة 7 أيام",
      loggedInAs: "مسجل الدخول كـ:",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailRequiredDesc: "يرجى إدخال عنوان بريدك الإلكتروني",
      invalidEmail: "بريد إلكتروني غير صالح",
      invalidEmailDesc: "يرجى إدخال عنوان بريد إلكتروني صالح",
      passwordRequired: "كلمة المرور مطلوبة",
      passwordRequiredDesc: "يرجى إدخال كلمة المرور",
      passwordTooShort: "كلمة المرور قصيرة جداً",
      passwordTooShortDesc: "مطلوب 6 أحرف على الأقل",
      confirmRequired: "تأكيد كلمة المرور مطلوب",
      confirmRequiredDesc: "يرجى تأكيد كلمة المرور",
      passwordMismatch: "كلمات المرور غير متطابقة",
      passwordMismatchDesc: "كلمات المرور غير متطابقة",
      redirecting: "جاري إعادة التوجيه إلى لوحة التحكم...",
      registrationFailed: "فشل التسجيل",
      loginFailed: "فشل تسجيل الدخول",
      loggedOut: "تم تسجيل الخروج",
      loggedOutDesc: "تم تسجيل خروجك بنجاح",
    },

    // Analyze Page
    analyze: {
      title: "تحليل التداول",
      uploadTitle: "رفع صورة الرسم البياني",
      uploadDesc: "اسحب وأفلت لقطة شاشة الرسم البياني أو انقر للتصفح",
      supportedFormats: "الصيغ المدعومة: JPG، PNG، GIF (الحد الأقصى 5 ميجابايت)",
      analyzing: "جاري التحليل...",
      analyzeChart: "تحليل الرسم البياني",
      removeImage: "إزالة الصورة",
      confidence: "الالتقاء",
      buy: "شراء",
      sell: "بيع",
      noSignal: "لا إشارة",
      analysisResult: "نتيجة التحليل",
      pleaseLogin: "يرجى تسجيل الدخول لاستخدام ميزة التحليل",
      invalidFile: "نوع ملف غير صالح",
      invalidFileDesc: "يرجى رفع ملف صورة (JPG، PNG، GIF)",
      fileTooLarge: "حجم الملف كبير جداً",
      fileTooLargeDesc: "حجم الملف يتجاوز حد 5 ميجابايت",
      activateAccount: "تفعيل الحساب",
      activateDesc: "اربط حساب الوسيط الخاص بك لمتابعة استخدام ميزة التحليل",
    },

    // Learning Page
    learning: {
      title: "مركز",
      center: "التعلم",
      comingSoon: "المحتوى التعليمي ودروس التداول قادمة قريباً. ترقب مواد تعليمية شاملة.",
    },

    // Trading Review Page
    tradingReview: {
      title: "مراجعة",
      review: "التداول",
      description: "شارك تجربتك في التداول وملاحظاتك معنا. رؤاك تساعدنا على تحسين خدماتنا.",
      yourReview: "مراحلتك",
      placeholder: "اكتب مراجعة التداول هنا...",
      attachImage: "إرفاق صورة (اختياري)",
      dragDrop: "اسحب وأفلت صورة أو انقر للتصفح",
      fileLimit: "JPG، PNG، GIF حتى 5 ميجابايت",
      submitReview: "إرسال المراجعة",
      submitting: "جاري الإرسال...",
      reviewSubmitted: "تم إرسال المراجعة!",
      thankYou: "شكراً لملاحظاتك",
      enterReview: "يرجى إدخال مراجعتك",
      failedSubmit: "فشل إرسال المراجعة",
      tryAgain: "يرجى المحاولة مرة أخرى لاحقاً",
    },

    // Offer Page
    offer: {
      tradeSmarter: "تداول",
      smarter: "بذكاء",
      notHarder: "ليس",
      harder: "بصعوبة",
      description:
        "ارفع رسمك البياني من أي منصة ودع ذكاءنا الاصطناعي يحلل فوراً الأنماط والمستويات وهيكل السوق. احصل على خطط تداول قابلة للتنفيذ مع نقاط الدخول ووقف الخسارة ومستويات جني الأرباح—بدون الحاجة لمعلم.",
      specialOffer: "عرض خاص",
      startAnalysis: "بدء تحليل الرسم البياني",
      linkBroker: "ربط حساب الوسيط",
      freeAnalyses: "مجاناً",
      startWith3: "ابدأ بـ 3",
      analyses: "تحليلات",
      freeTrialDesc: "جربها مع ثلاث تحليلات رسوم بيانية مجانية تماماً لترى القيمة بنفسك.",
      unlockAccess: "فتح الوصول الكامل",
      afterFree: "بعد تحليلاتك المجانية، ستحتاج إلى:",
      step1: "فتح حساب مع أحد",
      partneredBrokers: "وسطائنا الشركاء",
      step1End: "عبر الرابط المقدم.",
      step2: "الحفاظ على",
      minDeposit: "حد أدنى للإيداع",
      of50: "قدره",
      step2End: "لمواصلة الوصول إلى خطط التداول بالذكاء الاصطناعي.",
      confidence: "ثقة",
    },

    // Register Page
    register: {
      brokerAccess: "متطلبات",
      accessRequirements: "الوصول إلى",
      requirements: "الوسيط",
      step1: "سجل مع أحد وسطائنا الشركاء باستخدام الرابط المقدم.",
      step2: "قم بإيداع حد أدنى قدره 50 دولار لتفعيل حساب التداول الخاص بك.",
      step3: "بعد التسجيل، يرجى كتابة معرفك أدناه",
      registration: "التسجيل",
      alreadyHaveAccount: "لديك حساب بالفعل؟ أدخل معرفك أدناه",
      enterAccountId: "أدخل معرف حسابك",
      enterId: "أدخل معرفك",
      tooManyRequests: "طلبات كثيرة جداً. يرجى المحاولة مرة أخرى لاحقاً.",
      registrationSuccess: "تم تسجيل معرف حسابك بنجاح!",
      registrationFailed: "فشل التسجيل",
    },
  },
}

export type Translations = typeof translations.en
