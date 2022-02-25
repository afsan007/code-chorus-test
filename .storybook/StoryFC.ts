import { ReactElement } from 'react';

type ActionArgs =
  | 'onSelect'
  | 'onClick'
  | 'onSubmit'
  | 'onSearch'
  | 'onChange'
  | 'onFinished'
  | 'onChangeFilter'
  | 'onChangeTab'
  | 'onHover'
  | 'onViewClick'
  | 'onDownloadClick'
  | 'onClose'
  | 'onCancel'
  | 'onClear'
  | 'onToggle'
  | 'onSortSelect'
  | 'onEditClick'
  | 'onFilterChange'
  | 'onShareClick'
  | 'onDeleteClick'
  | 'onCreateGroupClick'
  | 'onSelectAllChange'
  | 'onSelectGroup'
  | 'onLoadMoreItems';

interface DesignLink {
  name: string;
  link: string;
}

export interface StoryFC<T = any> {
  (args: T): ReactElement<any, any> | null;
  args?: Omit<T, ActionArgs>;
  parameters?: {
    zeplinLink?: string | DesignLink[];
    figma?: string | DesignLink[];
    [key: string]: any;
  };
}
