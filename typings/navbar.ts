export namespace navbar {
  export type SubMenuItem = {
    key: string;
    title: string;
    href:
      | string
      | {
          pathname: string;
          query: Record<string, string>;
        };
  };

  export type MenuItem = {
    title: string;
    url: string;
    submenu?: SubMenuItem[];
  };
}
