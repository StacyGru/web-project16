import { Component, OnInit } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { HttpWorkerService } from 'src/app/shared/services/http-worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  workers: MyWorker[];
  searchStr = '';
  column = "byid";
  reverse = false;
  
  constructor(
    private HttpWorkerService: HttpWorkerService, 
    private router: Router) { }

  ngOnInit(): void 
  {
    this.getData();
  }

  async getData() 
  {
    try 
    {
      let workers = this.HttpWorkerService.getAll();
      this.workers = (await workers === null)||(await workers === undefined) 
        ? [] 
        : await workers;
    } 
    catch (err) 
    {
      console.error(err);
    }

    try 
    {
      this.workers = await this.HttpWorkerService.getAll();
    } 
    catch (err) 
    {
      console.log(err);
    }
  }

  onLinkProfile(id: number) 
  {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  onAddProfile() 
  {
    this.router.navigate([this.router.url, 'profile']);
  }

  async onDelete(id: number) 
  {
    try 
    {
      await this.HttpWorkerService.deleteOneById(id);
    } 
    catch (err) 
    {
      console.error(err);
    }
    this.getData();
  }
}
