export type planetTypes = { 
    name: string,
    overview: {
      content:string,
      source: string,
    },
    structure: {
      content:string,
      source: string,
    },
    geology: {
      content: string,
      source: string,
    },
    rotation: string,
    revolution: string,
    radius: string,
    temperature: string,
    images: {
      planet: string,
      internal: string,
      geology: string,
    },
    color: string
}

export type Props = {
  activeButton: string;
  changeContent: (planetDetails: {
    name: string;
    content: string;
    image: string;
    source: string;
  }) => void;
  planet: planetTypes;
  colorChangeHandler: (e: any) => void;
  color: string;
};
