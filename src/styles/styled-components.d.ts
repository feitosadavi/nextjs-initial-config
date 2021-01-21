import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // o declare vai fazer com que o styled components execute o comportamento abaixo
  // o default theme faz um merge do theme que está extendendo com o styled-components
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {} // estou criando o DefaultTheme agora e unindo o Theme à ela
}
