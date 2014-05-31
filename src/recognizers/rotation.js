function RotationRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotationRecognizer, AttrRecognizer, {
    defaults: {
        event: 'rotate',
        threshold: 3,
        pointers: 2
    },

    attrTest: function(input) {
        return Math.abs(1 - input.rotation) > this.options.threshold;
    }
});
