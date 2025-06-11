import { ReactNode } from "react";
import Chip from "../../../../components/chip";

type TypeUser = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Content = Record<string, string | ReactNode>;

export function reduceArray(info?: TypeUser[]): Content[] {
  const data = info?.slice(0, 7).map(item => item.title) ?? [];

  const content: Content[] = [
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[0]}</span></div>, create: '12 day ago' },
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[1]}</span></div>, create: '12 day ago' },
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[2]}</span></div>, create: '21 day ago' },
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[3]}</span></div>, create: '21 day ago' },
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[4]}</span></div>, create: '21 day ago' },
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[5]}</span></div>, create: '26 day ago' },
    { name: <div className="inline-content"><Chip label="borrador" chipStyle="secondary" size="s" /><span>{data[6]}</span></div>, create: 'About 1 mount ago' },
  ];

  return content;
}

    