import { pxCheck } from '@/packages/utils/pxCheck';
import { TypeOfFun, getScrollTopRoot } from '@/packages/utils/util';
import { useRect } from '@/packages/utils/useRect';
import { onMounted, provide, VNode, ref, Ref, computed, onActivated, watch, nextTick } from 'vue';
import raf from '@/packages/utils/raf';
export class Title {
  title: string = '';
  titleSlot?: VNode[];
  paneKey: string = '';
  disabled: boolean = false;
  constructor() {}
}
export type TabsSize = 'large' | 'normal' | 'small';
export const component = {
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'horizontal' //vertical
    },
    size: {
      type: String as import('vue').PropType<TabsSize>,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'line' //card、line、smile
    },
    titleScroll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ''
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 0
    }
  },

  components: {},
  emits: ['update:modelValue', 'click', 'change'],

  setup(props: any, { emit, slots }: any) {
    const container = ref(null);
    let stickyFixed: boolean;
    provide('activeKey', { activeKey: computed(() => props.modelValue) });
    provide('autoHeight', { autoHeight: computed(() => props.autoHeight) });
    const titles: Ref<Title[]> = ref([]);
    const renderTitles = (vnodes: VNode[]) => {
      vnodes.forEach((vnode: VNode, index: number) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (type == 'nut-tabpane') {
          let title = new Title();
          if (vnode.props?.title || vnode.props?.['pane-key'] || vnode.props?.['paneKey']) {
            let paneKeyType = TypeOfFun(vnode.props?.['pane-key']);
            let paneIndex =
              paneKeyType == 'number' || paneKeyType == 'string' ? String(vnode.props?.['pane-key']) : null;
            let camelPaneKeyType = TypeOfFun(vnode.props?.['paneKey']);
            let camelPaneIndex =
              camelPaneKeyType == 'number' || camelPaneKeyType == 'string' ? String(vnode.props?.['paneKey']) : null;
            title.title = vnode.props?.title;
            title.paneKey = paneIndex || camelPaneIndex || String(index);
            title.disabled = vnode.props?.disabled;
          } else {
            // title.titleSlot = vnode.children?.title() as VNode[];
          }
          titles.value.push(title);
        } else {
          if (vnode.children == ' ') {
            return;
          }
          renderTitles(vnode.children as VNode[]);
        }
      });
    };

    const currentIndex = ref((props.modelValue as number) || 0);
    const findTabsIndex = (value: string | number) => {
      let index = titles.value.findIndex((item) => item.paneKey == value);
      if (titles.value.length == 0) {
        console.error('[NutUI] <Tabs> 当前未找到 TabPane 组件元素 , 请检查 .');
      } else if (index == -1) {
        console.error('[NutUI] <Tabs> 请检查 v-model 值是否为 paneKey ,如 paneKey 未设置，请采用下标控制 .');
      } else {
        currentIndex.value = index;
      }
    };

    const getScrollY = computed(() => {
      if (props.titleScroll && props.direction === 'vertical') {
        return true;
      }
      return false;
    });
    const navRef = ref<HTMLElement>();
    const titleRef = ref([]) as Ref<HTMLElement[]>;
    const scrollIntoView = (immediate?: boolean) => {
      const nav = navRef.value;
      const _titles = titleRef.value;
      if (!nav || !_titles || !_titles[currentIndex.value]) {
        return;
      }
      const title = _titles[currentIndex.value];
      let to = 0;
      if (props.direction === 'vertical') {
        const runTop = title.offsetTop - nav.offsetTop + 10;
        to = runTop - (nav.offsetHeight - title.offsetHeight) / 2;
      } else {
        to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      }
      scrollDirection(nav, to, immediate ? 0 : 0.3, props.direction);
    };

    const scrollDirection = (nav: any, to: number, duration: number, direction: 'horizontal' | 'vertical') => {
      let count = 0;
      const from = direction === 'horizontal' ? nav.scrollLeft : nav.scrollTop;
      const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

      function animate() {
        if (direction === 'horizontal') {
          nav.scrollLeft += (to - from) / frames;
        } else {
          nav.scrollTop += (to - from) / frames;
        }

        if (++count < frames) {
          raf(animate);
        }
      }

      animate();
    };
    const init = (vnodes: VNode[] = slots.default?.()) => {
      titles.value = [];
      vnodes = vnodes?.filter((item) => typeof item.children !== 'string');
      if (vnodes && vnodes.length) {
        renderTitles(vnodes);
      }
      findTabsIndex(props.modelValue);
      nextTick(() => {
        scrollIntoView();
      });
    };
    const onStickyScroll = (params: { top: number; fixed: boolean }) => {
      stickyFixed = params.fixed;
    };

    watch(
      () => slots.default?.(),
      (vnodes: VNode[]) => {
        init(vnodes);
      }
    );

    watch(
      () => props.modelValue,
      (value: string | number) => {
        findTabsIndex(value);
        scrollIntoView();
        if (stickyFixed) {
          let top = useRect(container.value!).top + getScrollTopRoot();
          let value = Math.ceil(top - props.top);
          window.scrollTo({
            top: value,
            behavior: 'smooth'
          });
        }
      }
    );
    onMounted(init);
    onActivated(init);
    const contentStyle = computed(() => {
      return {
        transform:
          props.direction == 'horizontal'
            ? `translate3d(-${currentIndex.value * 100}%, 0, 0)`
            : `translate3d( 0,-${currentIndex.value * 100}%, 0)`,
        transitionDuration: `${props.animatedTime}ms`
      };
    });
    const tabsNavStyle = computed(() => {
      return {
        background: props.background
      };
    });
    const tabsActiveStyle = computed(() => {
      return {
        color: props.type == 'smile' ? props.color : '',
        background: props.type == 'line' ? props.color : ''
      };
    });
    const titleStyle = computed(() => {
      return {
        marginLeft: pxCheck(props.titleGutter),
        marginRight: pxCheck(props.titleGutter)
      };
    });
    const methods = {
      tabChange: (item: Title, index: number) => {
        emit('click', item);
        if (item.disabled || currentIndex.value == index) {
          return;
        }
        currentIndex.value = index;
        emit('update:modelValue', item.paneKey);
        emit('change', item);
      },
      setTabItemRef: (el: HTMLElement, index: number) => {
        titleRef.value[index] = el;
      }
    };
    return {
      navRef,
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      container,
      getScrollY,
      onStickyScroll,
      ...methods
    };
  }
};
