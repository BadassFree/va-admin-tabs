/*
 * @Author: 蚊子
 * @Date: 2022-08-11 00:59:38
 * @LastEditTime: 2023-02-01 00:49:05
 * @LastEditors: 蚊子
 * @Description: 
 * @FilePath: /va-admin-tabs/vite.config.ts
 * 坚持就是........
 */
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOption from 'unplugin-vue-define-options/vite';
import dts from 'vite-plugin-dts';
import unocss from 'unocss/vite';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`);

  const isVercel = viteEnv.VITE_IS_VERCEL === '1';

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      vue(),
      DefineOption(),
      unocss({ include: ['src/App.vue'] }),
      dts({
        include: ['./src/index.ts', './src/ButtonTab.vue', './src/ChromeTab.vue'],
        beforeWriteFile(filePath, content) {
          return {
            filePath: filePath.replace('/dist/src/', '/dist/'),
            content
          };
        }
      })
    ],
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: isVercel
      ? {
          brotliSize: false
        }
      : {
          lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'BadassFreeAdminTab',
            fileName: 'index'
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        }
  };
});
