const KeepAlive = {
  name: 'KeepAlive',
  abstract: true,
  props: {
    include: null,
    exclude: null
  },
  created() {
    this.cache = Object.create(null);
  },
  destroyed() {
    for (const key in this.cache) {
      const vnode = this.cache[key];
      if (vnode) {
        this.$destroy(vnode.componentInstance);
      }
    }
  },
  mounted() {
    this.$watch('include', val => {
      pruneCache(this.cache, name => matches(val, name));
    });
    this.$watch('exclude', val => {
      pruneCache(this.cache, name => !matches(val, name));
    });
  },
  render() {
    const slot = this.$slots.default;
    const vnode = getFirstComponentChild(slot);
    const componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      const name = getComponentName(componentOptions);
      const { include, exclude } = this;
      if ((include && (!name || !matches(include, name))) || (exclude && name && matches(exclude, name))) {
        return vnode;
      }
      const key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '') : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0]);
  }
};

function pruneCache(cache, filter) {
  for (const key in cache) {
    const vnode = cache[key];
    if (vnode) {
      const name = getComponentName(vnode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key);
      }
    }
  }
}

function pruneCacheEntry(cache, key) {
  const vnode = cache[key];
  if (vnode && vnode.componentInstance) {
    vnode.componentInstance.$destroy();
  }
  cache[key] = null;
}

function getComponentName(options) {
  return options && (options.Ctor.options.name || options.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  return false;
}

function getFirstComponentChild(children) {
  return children && children.filter(c => c && c.componentOptions)[0];
}

function isRegExp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]';
}