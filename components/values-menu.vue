
<template>
  <div class="flex flex-row space-between w-100 align-center">
    <div class="value-half w-50">
      <div class="w-90">
        <nav>
          <ul class="tabs">
            <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === tab }">
              <span class="tab-label" @click="selectTab(tab)">{{ tab.label }}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="venn-half w-50">
      <img class="fade-in" src="/img/Earnest Venn Diagram Only.png" alt="">
    </div>
  </div>
    <p class="tab-content w-90">{{ activeTab.content }}</p>
</template>


<script>
export default {
  data() {
    return {
      tabs: [
        { label: 'WHOLEHEARTED', content: "WHOLEHEARTED: with complete sincerity and commitment." },
        { label: 'MINDFUL', content: "MINDFUL: focusing ones awareness on the present moment." },
        { label: 'DILIGENT', content: "DILIGENT: attentive and persistent in doing anything." },
        { label: 'PRINCIPLED', content: "PRINCIPLED: active with integrity and honesty, with a strong sense of fairness, justice and respect." },
        { label: 'PASSIONATE', content: "PASSIONATE: having a strong belief in something." },
        { label: 'AUTHENTIC', content: "AUTHENTIC: true to your own personality, values, and spirit, regardless of the pressure that you're under to act otherwise." }
      ],
      activeTab: { label: 'none', content: '^ click to explore' }
    };
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>