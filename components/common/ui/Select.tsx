import type { Props } from 'react-select/base';

import ReactSelect, { GroupBase } from 'react-select';

export default function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      {...props}
      styles={{
        option: (base, state) => ({
          ...base,
          color: state.isSelected ? 'white' : 'var(--text-primary)',
        }),
      }}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: 'var(--slate-blue-50)',
          primary25: 'var(--slate-blue)',
          primary75: 'var(--slate-blue-100)',
          neutral0: 'var(--bg-light)',
          neutral20: 'var(--text-primary)',
          neutral40: 'var(--text-primary)',
          neutral80: 'var(--text-primary)',
        },
      })}
    />
  );
}
