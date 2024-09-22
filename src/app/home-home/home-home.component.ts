import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  standalone: true,
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrl: './home-home.component.css'
})
export class HomeHomeComponent implements OnInit{
  bankerName = "Tevyn Payne";
  bankerAddress = "5000 Dallas";
  bankerCity = "Euless";
  bankerState = "TX";
  bankerZip = "77777";
  bankerPhone = "(777) 777-7777";
  bankerEmail = "tevyn.payne@gmail.com";
  summary = "Eager and motivated software developer with extensive knowledge and hands-on experience in several languages, programming principles, data structures, object-oriented programming algorithms and databases, seeking a challenging role within a reputable organization. Possesses a positive attitude and strong written and verbal communication skills that facilitate effective collaboration. Demonstrates a process optimized logical mindset, drawing from a diverse background that enhances problem-solving and innovation. Committed to contributing positively to organizational goals and fostering a culture of continuous improvement.";
  school = "Western Govener's University";
  schoolDates = "09/23 - 08/25";
  schoolDegree = "Bachelor of Science, Software Engineering";
  employerName = "Albertsons";
  jobTitle = "Frozen Foods Department Manager";
  employmentDates = "09/2023 - Pressent"

  constructor() {}
  ngOnInit(): void{}
}
