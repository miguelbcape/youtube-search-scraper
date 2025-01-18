declare module 'yt-api-search' {
  export const constants: any;
  export const SearchYouTube: any;
  export const SearchTypes: { VIDEO: string; CHANNEL: string; PLAYLIST: string };
  export const YouTubeURL: URL;

  export function compress(key: any): string;
  export function getChannelLink(cRender: any): string;
  export function getPlaylistVideoData(renderer: any): any;
  export function getPlaylistGeneralData(pRender: any): any;
  export function getChannel(vRender: any): any;
  export function parseDuration(vRender: any): number;
  export function getDuration(vRender: any): string;
  export function textDuration(vRender: any): string;
  export function getViews(vRender: any): number;
  export function parseViews(vRender: any): string;
  export function textViews(vRender: any): string;
  export function shortTextViews(vRender: any): string;
  export function getUploadDate(vRender: any): string;
  export function getDescription(vRender: any): string;
}
