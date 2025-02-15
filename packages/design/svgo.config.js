export default {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }],
      },
    },
  ],
};
