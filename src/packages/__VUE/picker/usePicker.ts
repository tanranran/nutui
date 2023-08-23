import { ref, reactive, watch, computed, toRaw, toRefs, PropType } from 'vue';
interface PickerOption {
  text: string | number;
  value: string | number;
  disabled?: string;
  children?: PickerOption[];
  className?: string | number;
}

export const usePicker = (props: any, emit: any) => {
  const state = reactive({
    formattedColumns: props.columns
  });

  // 选中项
  let defaultValues = ref<(number | string)[]>(
    Array.isArray(props.modelValue) && props.modelValue.length > 0 ? props.modelValue : []
  );

  const pickerColumn = ref<any[]>([]);

  const swipeRef = (el: any) => {
    if (el && pickerColumn.value.length < columnsList.value.length) {
      pickerColumn.value.push(el);
    }
  };

  const classes = computed(() => {
    const prefixCls = 'nut-picker';
    return {
      [prefixCls]: true
    };
  });

  const selectedOptions = computed(() => {
    let optins: PickerOption[] = [];
    (columnsList.value as PickerOption[][]).map((column: PickerOption[], index: number) => {
      let currOptions = [];
      currOptions = column.filter((item) => item.value == defaultValues.value[index]);
      optins.push(currOptions[0]);
    });

    return optins;
  });
  // 当前类型
  const columnsType = computed(() => {
    const firstColumn: PickerOption | PickerOption[] = state.formattedColumns[0];
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return 'multiple';
      }
      if ('children' in firstColumn) {
        return 'cascade';
      }
    }
    return 'single';
  });
  // 将传入的 columns 格式化
  const columnsList = computed(() => {
    switch (columnsType.value) {
      case 'multiple':
        return state.formattedColumns as PickerOption[][];
      case 'cascade':
        // 级联数据处理
        return formatCascade(state.formattedColumns as PickerOption[], defaultValues.value ? defaultValues.value : []);
      default:
        return [state.formattedColumns] as PickerOption[][];
    }
  });

  // 级联数据格式化
  const formatCascade = (columns: PickerOption[], defaultValues: (number | string)[]) => {
    const formatted: PickerOption[][] = [];
    let cursor: PickerOption = {
      text: '',
      value: '',
      children: columns
    };

    let columnIndex = 0;

    while (cursor && cursor.children) {
      const options: PickerOption[] = cursor.children;
      const value = defaultValues[columnIndex];
      let index = options.findIndex((columnItem) => columnItem.value == value);
      if (index == -1) index = 0;
      cursor = cursor.children[index];

      columnIndex++;
      formatted.push(options);
    }

    return formatted;
  };

  const close = () => {
    emit('close', {
      selectedValue: defaultValues.value,
      selectedOptions: selectedOptions.value
    });
    emit('update:visible', false);
  };

  const changeHandler = (columnIndex: number, option: PickerOption) => {
    if (option && Object.keys(option).length) {
      defaultValues.value = defaultValues.value ? defaultValues.value : [];

      if (columnsType.value === 'cascade') {
        defaultValues.value[columnIndex] = option.value ? option.value : '';
        let index = columnIndex;
        let cursor = option;
        while (cursor && cursor.children && cursor.children[0]) {
          defaultValues.value[index + 1] = cursor.children[0].value;
          index++;
          cursor = cursor.children[0];
        }

        // 当前改变列 的 下一列 children 值为空
        if (cursor && cursor.children && cursor.children.length == 0) {
          defaultValues.value = defaultValues.value.slice(0, index + 1);
        }
      } else {
        defaultValues.value[columnIndex] = option.hasOwnProperty('value') ? option.value : '';
      }

      emit('change', {
        columnIndex: columnIndex,
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    }
  };

  const confirm = () => {
    if (defaultValues.value && !defaultValues.value.length) {
      columnsList.value.forEach((columns) => {
        defaultValues.value.push(columns[0].value);
        selectedOptions.value.push(columns[0]);
      });
    }

    emit('confirm', {
      selectedValue: defaultValues.value,
      selectedOptions: selectedOptions.value
    });
    emit('update:visible', false);
  };

  const isSameValue = (valA: any, valB: any) => JSON.stringify(valA) === JSON.stringify(valB);

  watch(
    () => props.modelValue,
    (newValues) => {
      if (!isSameValue(newValues, defaultValues.value)) {
        defaultValues.value = newValues;
      }
    },
    { deep: true }
  );

  watch(
    defaultValues,
    (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit('update:modelValue', newValues);
      }
    },
    { deep: true }
  );

  watch(
    () => props.columns,
    (val) => {
      if (val.length) state.formattedColumns = val as PickerOption[];
    }
  );

  return {
    classes,
    ...toRefs(state),
    columnsType,
    columnsList,
    close,
    changeHandler,
    confirm,
    defaultValues,
    pickerColumn,
    swipeRef,
    selectedOptions,
    isSameValue
  };
};
