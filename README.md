<!--
 * @Author: 蚊子
 * @Date: 2023-02-01 00:28:00
 * @LastEditTime: 2023-02-01 14:56:46
 * @LastEditors: 蚊子
 * @Description:
 * @FilePath: /va-admin-tabs/README.md
 * 坚持就是........
-->

# 简介

va-admin-tabs 是一个由 Vue3 + TypeScript + Vite 集成的后台 tab 组件

# 使用教程

```bash
npm install -S va-admin-tabs

or

yarn add va-admin-tabs
```

# 快速上手

在 main.ts 中写入以下内容：

```typescript
// main.ts
import { createApp } from "vue";
import { ButtonTab, ChromeTab } from "va-admin-tabs";
import App from "./App.vue";

const app = createApp(App);

app.component("ButtonTab", ButtonTab);
app.component("ChromeTab", ChromeTab);

app.mount("#app");
```

在 App.vue 中写入内容

```html
<template>
  <div
    class="h-full p-24px text-14px bg-#f6f9f8"
    :class="{ '!bg-#101014 text-light': darkMode }"
  >
    <div>
      <span class="pr-24px text-24px font-bold">暗黑模式</span>
      <input type="checkbox" :checked="darkMode" @change="handleDarkMode" />
    </div>
    <h3 class="pb-24px text-24px font-bold">ButtonTab</h3>
    <div
      class="tab-shadow pl-16px py-8px bg-white"
      :class="{ '!bg-dark text-white': darkMode }"
    >
      <button-tab :dark-mode="darkMode">default</button-tab>
      <button-tab :dark-mode="darkMode" :is-active="true" class="ml-12px"
        >active</button-tab
      >
      <button-tab :dark-mode="darkMode" :closable="false" class="ml-12px"
        >no-close</button-tab
      >
    </div>
    <div
      class="tab-shadow px-16px py-8px mt-12px bg-white"
      :class="{ '!bg-dark text-white': darkMode }"
    >
      <button-tab :dark-mode="darkMode" primary-color="#5856D6"
        >default</button-tab
      >
      <button-tab
        :dark-mode="darkMode"
        primary-color="#5856D6"
        :is-active="true"
        class="ml-12px"
        >active</button-tab
      >
      <button-tab
        :dark-mode="darkMode"
        primary-color="#5856D6"
        :closable="false"
        class="ml-12px"
        >no-close</button-tab
      >
    </div>
    <h3 class="py-24px text-24px font-bold">ChromeTab</h3>
    <div
      class="tab-shadow pl-16px py-8px bg-white"
      :class="{ '!bg-dark text-white': darkMode }"
    >
      <chrome-tab :dark-mode="darkMode">default</chrome-tab>
      <chrome-tab :dark-mode="darkMode" :is-active="true">active</chrome-tab>
      <chrome-tab :dark-mode="darkMode" :closable="false">no-close</chrome-tab>
    </div>
    <div
      class="tab-shadow px-16px py-8px mt-12px bg-white"
      :class="{ '!bg-dark text-white': darkMode }"
    >
      <chrome-tab :dark-mode="darkMode" primary-color="#5856D6"
        >default</chrome-tab
      >
      <chrome-tab
        :dark-mode="darkMode"
        primary-color="#5856D6"
        :is-active="true"
        >active</chrome-tab
      >
      <chrome-tab
        :dark-mode="darkMode"
        primary-color="#5856D6"
        :closable="false"
        >no-close</chrome-tab
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useBoolean } from "./hooks";

  const { bool: darkMode, toggle } = useBoolean();

  function handleDarkMode() {
    toggle();
  }
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
  }

  .tab-shadow {
    box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
  }
</style>
```

# ButtonTab 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--------------- | :--------------- | :--------------- | :--------------- |
|  darkMode| 暗黑模式 | boolean | false |
|  isActive| 激活状态 | boolean | false |
|  primaryColor| 主题颜色 | string | '#1890ff' |
|  borderColor| 边框颜色 | string | '#e5e7eb' |
|  darkBorderColor| 暗黑模式的边框颜色 | string | '#ffffff3d' |
|  closable| 是否显示关闭图标 | boolean | true |

# ButtonTab 事件

| 属性名 | 说明 | 回调参数 | 
| :--------------- | :--------------- | :--------------- |
| close | 关闭tab时触发 | - |

# ChromeTab 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--------------- | :--------------- | :--------------- | :--------------- |
|  darkMode | 暗黑模式  | boolean | false |
|  isActive | 激活状态  | boolean | false |
|  primaryColor | 主题颜色  | string | '#1890ff' |
|  closable | 是否显示关闭图标  | boolean | true |
|  bgColor | 背景颜色  | [string, string] |  () => ['#ffffff', '#18181c'] |
|  hoverBgColor | 悬浮时的背景颜色  |  [string, string] | () => ['#dee1e6', '#3f3c37'] |
|  mixColor | 激活状态时的混合颜色  |  [string, string] | () => ['#ffffff', '#000'] |
|  mixRatio | 混合比例(主题颜色的占比)  | [number, number] | () => [0.13, 0.35] |

# ChromeTab 事件

| 属性名 | 说明 | 回调参数 | 
| :--------------- | :--------------- | :--------------- |
| close | 关闭tab时触发 | - |
