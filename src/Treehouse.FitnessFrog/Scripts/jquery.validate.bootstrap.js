(($) => {
    const defaultOptions = {
        validClass: 'has-success',
        errorClass: 'has-error',
        highlight: (element, errorClass, validClass) => {
            $(element).closest('.form-group')
                .removeClass(validClass)
                .addClass(errorClass);
        },
        unhighlight: (element, errorClass, validClass) => {
            $(element).closest('.form-group')
                .removeClass(errorClass)
                .addClass(validClass);
        }
    };

    $.validator.setDefaults(defaultOptions);

    $.validator.unobtrusive.options = {
        errorClass: defaultOptions.errorClass,
        validClass: defaultOptions.validClass,
    };
})(jQuery);