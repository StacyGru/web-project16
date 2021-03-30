import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpWorkerService } from 'src/app/shared/services/http-worker.service';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  id: number;
  worker: MyWorker;
  MyWorkerType = MyWorkerType;
  EditForm : FormGroup;
  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    private activatedRouter: ActivatedRoute,
    private HttpWorkerService: HttpWorkerService,
    private router: Router
  ) 
  {
    this.activatedRouter.params.subscribe((param) => 
    {
      this.id = param.id;
    });
  }

  ngOnInit(): void
  {
    this.EditForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      date_of_birth: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      type: new FormControl(0, [Validators.required])
    });
    this.getData();
  }

  async getData() {
    if ((this.id !== null)&&(this.id !== undefined)) 
    {
      try 
      {
        let worker = this.HttpWorkerService.getOneById(this.id);
        this.worker = await worker;
      } catch (err) 
      {
        console.error(err);
      }
      this.EditForm.patchValue({
        name: this.worker.name,
        last_name: this.worker.last_name,
        surname: this.worker.surname,
        date_of_birth: this.worker.date_of_birth,
        phone: this.worker.phone,
        email: this.worker.email,
        type: this.worker.type
      });
    }
  }

  async onSave() 
  {
    if ((this.id !== null)&&(this.id !== undefined)) 
    {
      try 
      {
        await this.HttpWorkerService.putOneById(this.id, this.EditForm.value);
      } catch (err) 
      {
        console.error(err);
      }
    } 
    else 
    {
      try 
      {
        let res = await this.HttpWorkerService.postOne(this.EditForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } 
      catch (err) 
      {
        console.error(err);
      }
    }
  }

  async onDelete() 
  {
    try 
    {
      await this.HttpWorkerService.deleteOneById(this.id);
    } catch (err) 
    {
      console.error(err);
    }
    this.router.navigate(['/workers']);
  }
}
