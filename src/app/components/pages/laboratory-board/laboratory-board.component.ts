import {Component, OnInit} from '@angular/core';
import {LaboratoryInterface} from '../../interfaces/laboratory.interface';
import {LabService} from '../../service/lab.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-laboratory-board',
  templateUrl: './laboratory-board.component.html',
  styleUrls: ['./laboratory-board.component.scss']
})
export class LaboratoryBoardComponent implements OnInit {
  public lab: LaboratoryInterface;


  constructor(private labService: LabService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.initLab();
  }

  private initLab() {
    this.lab = this.labService.initLabFromService(this.activatedRoute.snapshot.params.id);
    console.log(this.lab);
  }
}
