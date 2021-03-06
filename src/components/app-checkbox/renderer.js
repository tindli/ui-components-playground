var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function(input, out) {
    var label = input.label;
    var checked = input.checked === true;
    var className = 'app-checkbox';

    if (input['class']) {
        className += ' ' + input['class'];
    }

    if (checked) {
        className += ' checked';
    }

    template.render({
            // widgetConfig is a special property that is used to control
            // what data gets passed to the widget constructor
            widgetConfig: {
                data: input.data
            },
            className: className,
            label: label,
            checked: checked
        }, out);
};