/**
 * TypeDemo 组件测试
 */

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TypeDemo from '../TypeDemo.vue';

describe('TypeDemo 组件', () => {
  it('应该正确渲染组件和显示用户信息', () => {
    const wrapper = mount(TypeDemo);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('TypeScript 工具类型演示');

    // 验证用户信息显示
    const userCard = wrapper.find('.user-card');
    const paragraphs = userCard.findAll('p');
    expect(paragraphs[0]!.text()).toContain('ID: 1');
    expect(paragraphs[1]!.text()).toContain('姓名: 张三');
    expect(paragraphs[2]!.text()).toContain('邮箱: zhangsan@example.com');
  });
});
