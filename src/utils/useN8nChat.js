// utils/useN8nChat.js
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';

export const useN8nChat = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-i83n.onrender.com/webhook/e8d05464-738b-466c-93cf-47c1456ec0fe/chat',
      webhookConfig: {
        method: 'POST',
        headers: {},
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: ['Haz una pregunta?'],
      i18n: {
        en: {
          title: 'Hey! 👋',
          subtitle: 'Aquí puedes hacerme cualquier pregunta',
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question...',
        },
      },
    });
  }, []);
};

