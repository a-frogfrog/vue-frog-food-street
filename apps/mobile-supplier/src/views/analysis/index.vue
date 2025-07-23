<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, useTemplateRef } from 'vue';
import { Page } from '@frog/common-ui';

const chartDom = useTemplateRef<HTMLDivElement>('mainRef');
type EChartsOption = echarts.EChartsOption;
onMounted(() => {
  const myChart = echarts.init(chartDom.value);
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
      },
    ],
  };

  option && myChart.setOption(option);
});
</script>

<template>
  <Page>
    <div class="!p-4">
      <div class="text-lg font-bold">分析</div>
      <div id="main" ref="mainRef" style="width: 100%; height: 400px"></div>
    </div>
  </Page>
</template>

<style scoped></style>
