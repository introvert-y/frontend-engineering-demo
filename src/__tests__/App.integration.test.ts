/**
 * App 集成测试
 * 测试多个组件之间的协作
 */

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App 集成测试', () => {
  it('应该正确渲染应用并切换 Tab', async () => {
    const wrapper = mount(App);

    // 验证标题
    expect(wrapper.find('h1').text()).toBe('前端工程化 Demo');

    // 验证默认显示计数器Tab
    expect(wrapper.find('.tabs button.active').text()).toBe('计数器演示');
    expect(wrapper.find('.hello').exists()).toBe(true);

    // 切换到 TypeScript 演示 Tab
    await wrapper.findAll('.tabs button')[1]!.trigger('click');

    // 验证切换后的状态
    expect(wrapper.findAll('.tabs button')[1]!.classes()).toContain('active');
    expect(wrapper.find('.type-demo').exists()).toBe(true);
    expect(wrapper.find('.hello').exists()).toBe(false);
  });

  it('应该实现计数器功能集成', async () => {
    const wrapper = mount(App);

    // 初始计数为 0
    expect(wrapper.text()).toContain('当前计数： 0');

    // 点击 HelloWorld 组件中的按钮
    await wrapper.find('.hello button').trigger('click');

    // 验证 App 组件中的计数更新
    expect(wrapper.text()).toContain('当前计数： 1');

    // 再次点击
    await wrapper.find('.hello button').trigger('click');
    expect(wrapper.text()).toContain('当前计数： 2');
  });
});
