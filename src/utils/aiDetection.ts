// AI Referer検出ロジック

export const AI_PLATFORMS = {
  CHATGPT: {
    name: 'ChatGPT',
    referers: ['chatgpt.com', 'chat.openai.com'],
    userAgents: ['ChatGPT', 'GPTBot']
  },
  CLAUDE: {
    name: 'Claude',
    referers: ['claude.ai', 'anthropic.com'],
    userAgents: ['Claude']
  },
  PERPLEXITY: {
    name: 'Perplexity',
    referers: ['perplexity.ai'],
    userAgents: ['PerplexityBot']
  },
  GEMINI: {
    name: 'Gemini',
    referers: ['gemini.google.com', 'bard.google.com'],
    userAgents: ['Google-Extended']
  },
  BING_CHAT: {
    name: 'Bing Chat',
    referers: ['bing.com/chat', 'edgeservices.bing.com'],
    userAgents: ['BingPreview']
  },
  YOU_COM: {
    name: 'You.com',
    referers: ['you.com'],
    userAgents: ['YouBot']
  }
} as const;

export function detectAIPlatform(
  referer: string,
  userAgent: string
): string | null {
  for (const platform of Object.values(AI_PLATFORMS)) {
    // Refererチェック
    if (platform.referers.some(ref => referer.includes(ref))) {
      return platform.name;
    }

    // User-Agentチェック
    if (platform.userAgents.some(ua => userAgent.includes(ua))) {
      return platform.name;
    }
  }

  return null;
}

export function isAITraffic(
  referer: string,
  userAgent: string
): boolean {
  return detectAIPlatform(referer, userAgent) !== null;
}
