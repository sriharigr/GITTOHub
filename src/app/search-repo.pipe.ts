import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRepo'
})
export class SearchRepoPipe implements PipeTransform {

  transform(listOfRepo: any, searchText: any): any {

    if(!listOfRepo) return [];
    if(!searchText) return listOfRepo;
 
    searchText = searchText.toLowerCase();
 
    return listOfRepo.filter( repo => {
       return repo.name.toLowerCase().includes(searchText);
     });  }

}
