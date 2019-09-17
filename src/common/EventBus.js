import Vue from 'vue';

// 消息总线
export const EventBus = new Vue();

// 获取排队消息
export const Current_Queue = 'Current_Queue'