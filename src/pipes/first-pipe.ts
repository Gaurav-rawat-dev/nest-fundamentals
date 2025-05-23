import { ArgumentMetadata, PipeTransform } from "@nestjs/common";


export class PipeToNumber implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
    const newObj = { ...value }; // shallow copy to avoid mutating original
    if (newObj.name) {
      newObj.name = Number(newObj.name); // convert name to number
    }
    return newObj; // return updated object
  }
}
