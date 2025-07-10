/**
 * Formata telefone
 * @param phone - Telefone no formato string
 * @returns Telefone formatado como +55 (11) 99999-9999
 */
export const formatPhone = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '');

  // Se começar com 55, assume que já tem código do país
  if (cleaned.startsWith('55') && cleaned.length === 13) {
    const countryCode = cleaned.substring(0, 2);
    const areaCode = cleaned.substring(2, 4);
    const firstPart = cleaned.substring(4, 9);
    const secondPart = cleaned.substring(9, 13);

    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }

  // Se tem 11 dígitos, assume DDD + número
  if (cleaned.length === 11) {
    const areaCode = cleaned.substring(0, 2);
    const firstPart = cleaned.substring(2, 7);
    const secondPart = cleaned.substring(7, 11);

    return `+55 (${areaCode}) ${firstPart}-${secondPart}`;
  }

  // Se não conseguir formatar, retorna o original
  return phone;
};
