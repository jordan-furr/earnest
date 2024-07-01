
<template>
    <div>
        <nav>
            <ul class="tabs">
                <li 
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="{ active: activeTab === tab }"
                >
                    <span class="tab-label" @click="selectTab(tab)">{{ tab.label }}</span>
                </li>
            </ul>
        </nav>
        <p>{{ activeTab.content }}</p>
    </div>
</template>


<script>
export default {
  data() {
    return {
      tabs: [
        { label: 'WHOLEHEARTED', content: "with complete sincerity and commitment." },
        { label: 'MINDFUL', content: "focusing ones awareness on the present moment." },
        { label: 'DILIGENT', content: "attentive and persistent in doing anything." },
        { label: 'PRINCIPLED', content: "active with integrity and honesty, with a strong sense of fairness, justice and respect." },
        { label: 'PASSIONATE', content: "having a strong belief in something." },
        { label: 'AUTHENTIC', content: "true to your own personality, values, and spirit, regardless of the pressure that you're under to act otherwise." }
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