export interface Item {

    id: number;
    name: string;
    category: string; // home or fashion for now.
    description: string;   
    estimatedValue: number;
    imageDirectory: string;  // this is a directory which contains pictures of images
    //// below we use the name of the photo
    //// public IEnumerable<String>? ImageNames { get; set; }
    imageName: string;
}

export interface ItemAndImages {
  item: Item;           // this contains the data
  formData: FormData;   // this piece contains all the images
}
