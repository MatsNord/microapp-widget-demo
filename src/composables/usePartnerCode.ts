import { ref, onMounted, onUnmounted } from 'vue';

//const allowedOrigin = 'https://boende.bolaget.se'
const allowedOrigin = 'http://localhost:5174'


export function usePartnerCode() {
  const partnerCode = ref<string | null>(null);

  function handleMessage(event: MessageEvent) {

    if (event.origin !== allowedOrigin) {
      console.warn('Ignored message from untrusted origin:', event.origin);
      return
    }

    if (event.data && event.data.partnerCode) {
      partnerCode.value = event.data.partnerCode;
    }
  }

  onMounted(() => {
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: 'widgetReady' }, allowedOrigin); 
  });

  onUnmounted(() => {
    window.removeEventListener('message', handleMessage);
  });

  return { partnerCode };
}
