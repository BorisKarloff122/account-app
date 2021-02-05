import {Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HistoryService } from '../history/services/history.service';
import { ICategory } from '../../../shared/interface/category';
import { RecordsService } from './services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  public addEvent!: FormGroup;
  public options: string[] = [];
  public filteredOptions: Observable<string[]>;
  public submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private historyService: HistoryService,
    private recordsService: RecordsService
  ) { }

  ngOnInit(): void{
    this.getCategories();
    this.buildForm();
  }

  public onSubmit(): void{
    if (this.addEvent.valid){
      if (this.options.indexOf(this.addEventControls.category.value) !== -1){
        this.addEvent.value.category = this.options.indexOf(this.addEventControls.category.value) + 1;
        this.recordsService.submitForm(this.addEvent.value);
      }
      else{
        const catObject: ICategory = {name: this.addEventControls.category.value, id: this.options.length + 1, capacity: 1000};
        this.recordsService.createCategory(catObject);
        this.addEvent.value.category = this.options.length + 1;
        this.recordsService.submitForm(this.addEvent.value);
      }
      this.submitted = true;
      setTimeout(() => {this.submitted = false; }, 1000);
    }
    else{
      alert(false);
    }
  }

  private getCategories(): void{
    this.historyService.getCategories().subscribe((res) => {
      res.forEach((i, index) => {
        this.options.push(i.name);
      });
    });
  }

  private buildForm(): void{
    this.addEvent = this.fb.group({
      category: ['', Validators.required],
      type: ['', Validators.required],
      value: ['', Validators.required],
      description: ['']
    });
    this.filteredOptions = this.addEventControls.category.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  get addEventControls(): {[p: string]: AbstractControl} {
      return this.addEvent.controls;
  }
}
