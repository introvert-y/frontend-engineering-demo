/**
 * HelloWorld 组件测试
 */

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld 组件', () => {
  describe('组件渲染', () => {
    it('应该正确渲染组件', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('.hello').exists()).toBe(true);
    });

    it('应该显示欢迎信息', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      const h2 = wrapper.find('h2');
      expect(h2.text()).toBe('欢迎使用 Vue 3 + TypeScript');
    });

    it('应该显示传入的 count 值', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 5,
        },
      });

      const p = wrapper.find('p');
      expect(p.text()).toContain('计数器：5');
    });

    it('应该显示按钮', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      const button = wrapper.find('button');
      expect(button.exists()).toBe(true);
      expect(button.text()).toBe('点击增加');
    });
  });

  describe('Props 测试', () => {
    it('应该接收 count prop', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 10,
        },
      });

      expect(wrapper.props('count')).toBe(10);
    });

    it('count 值变化时应该更新显示', async () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      expect(wrapper.find('p').text()).toContain('计数器：0');

      // 更新 prop
      await wrapper.setProps({ count: 3 });

      expect(wrapper.find('p').text()).toContain('计数器：3');
    });
  });

  describe('事件测试', () => {
    it('点击按钮应该触发 increment 事件', async () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      const button = wrapper.find('button');
      await button.trigger('click');

      // 检查事件是否被触发
      expect(wrapper.emitted('increment')).toBeTruthy();
      expect(wrapper.emitted('increment')).toHaveLength(1);
    });

    it('多次点击按钮应该触发多次 increment 事件', async () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      const button = wrapper.find('button');

      // 点击 3 次
      await button.trigger('click');
      await button.trigger('click');
      await button.trigger('click');

      expect(wrapper.emitted('increment')).toHaveLength(3);
    });
  });

  describe('DOM 查询', () => {
    it('应该能通过 CSS 选择器查找元素', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      expect(wrapper.find('.hello').exists()).toBe(true);
      expect(wrapper.find('h2').exists()).toBe(true);
      expect(wrapper.find('p').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(true);
    });

    it('应该能获取元素的属性', () => {
      const wrapper = mount(HelloWorld, {
        props: {
          count: 0,
        },
      });

      const helloDiv = wrapper.find('.hello');
      expect(helloDiv.classes()).toContain('hello');
    });
  });
});
