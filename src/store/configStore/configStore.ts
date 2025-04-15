import { ref } from "vue";
import { defineStore } from "pinia";
import { APP_VERSION } from "@/constants/app";
import { retryFetch } from "./lib";

let configPromise: Promise<any> | null = null;

export const useConfigStore = defineStore('config', () => {
  const config = ref<any>(null);

  async function getConfig() {
    if (config.value) return config;

    // 如果已经有配置加载的 Promise，直接返回它
    if (configPromise) {
      return await configPromise;
    }

    // 创建一个新的 Promise 来加载配置
    configPromise = new Promise(async (resolve, reject) => {
      try {
        const data = await retryFetch('/config.json'); // 使用重试函数
        config.value = {
          ...data,
          APP_VERSION
        }
        resolve(config);
      } catch (err) {
        console.log('err ===', err);
        reject(err);
      } finally {
        configPromise = null;
      }
    });

    return await configPromise;
  }

  return { getConfig, config };
})

