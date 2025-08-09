const animations = [
  {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  {
    transform: 'translateX(0%)',
    opacity: 1,
  },
];

const animationOptions = {
  duration: 700,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

const elMap = new WeakMap();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 与视口相交
    if (entry.isIntersecting) {
      const el = elMap.get(entry.target);
      el && el.play(); // 播放动画
      observer.unobserve(entry.target);
    }
  });
});
const isViewPort = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return rect.top > window.innerHeight;
};

export const vSlideIn = {
  mounted(el: HTMLElement) {
    if (!isViewPort(el)) {
      return;
    }
    const animation = el.animate(animations, animationOptions);
    observer.observe(el);
    elMap.set(el, animation);
    animation.pause();
  },
};
