import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  id!: number;
  personne!: Personne;
  
  constructor(private route: ActivatedRoute, private personneService: PersonneService, 
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.personneService.getPersonById(this.id).subscribe(data => {
      this.personne = data;
    })
  }

  editPerson() {
    this.personneService.updatePerson(this.id, this.personne).subscribe(data => {
      console.log("Edit person :" + data);
    })
    this.router.navigateByUrl('personne');
  }

  // backToPersonList(){
  //   this.router.navigate(['/personne']);
  // }

}
