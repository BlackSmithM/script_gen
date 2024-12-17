import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const APP_INFO: AppInfo = {
  title: '剧本生成助手',
  description: '根据输入生成剧本杀的剧本',
  copyright: '企业AI服务组',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

console.log('Languages:', languages);
console.log('Matched Locale:', matchedLocale);
