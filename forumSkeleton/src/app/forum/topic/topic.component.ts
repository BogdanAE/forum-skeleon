import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
   @Input() topic: { id: number }
  //  topic: [{ id: 1 } , { id: 2} ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.topic = {
      id: this.route.snapshot.params['id']
    };
  }
}
