import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  Designation:string ="";
  Username:string = "";
  NoOfTeamMembers:number = 0;
  TotalCostOfAllProjects:number = 0;
  PendingTasks: number = 0;
  UpComingProjects:number = 0;
  ProjectCost:number = 0;
  CurrentExpenditure:number = 0; 
  AvailableFunds:number = 0;
  ToDay:Date | undefined;

  Clients!:string[];
  Projects:string[] = [];
  Years:number[] = [];
  TeamMembersSummary:any= [];
  TeamMembers:any = []; 
 
     ngOnInit()
     {      
      this.Designation = "Team Leader";  
      this.Username = "Emmanuel";   
      this.NoOfTeamMembers = 67;  
      this.TotalCostOfAllProjects = 250;  
      this.PendingTasks = 8;   
      this.UpComingProjects = 2;    
      this.ProjectCost = 2393933;    
      this.ToDay = new Date();
      this.Clients = [
        "Samisen Technologies Pvt", "Ungerboeck Payment", "AdvanPro"
      ];

      this.Projects = [
        "Project A", "Project B", "Project C", "Project D" 
      ];
      
      for (var i = 2019;i >=2010; i--)
      {
        this.Years.push(i);        
      }
       
      this.TeamMembersSummary = [
        {Region:"North", TeamMembersCount:20,TemporarilyUnavailableMembers:4 },
        {Region:"South", TeamMembersCount:22,TemporarilyUnavailableMembers:6},
        {Region:"India", TeamMembersCount:14, TemporarilyUnavailableMembers:9},
        {Region:"East", TeamMembersCount:17, TemporarilyUnavailableMembers:3}
      ];
    
     this.TeamMembers = [
      {
        Region: "North", Members:[
        {ID:1, Name: "Ford", Status:"Available"}, 
        {ID:2, Name: "Miller", Status:"Busy"},
        {ID:3, Name: "Jones", Status:"Available"},
        {ID:4, Name: "Jamesc", Status:"Busy"}
      ]
     },
     {
      Region: "South", Members:[
      {ID:1, Name: "Ford", Status:"Available"},
      {ID:2, Name: "Miller", Status:"Busy"},
      {ID:3, Name: "Jones", Status:"Available"},
      {ID:4, Name: "Jamesc", Status:"Busy"}
    ]
   },
   {
    Region: "East", Members:[
    {ID:1, Name: "Ford", Status:"Available"},
    {ID:2, Name: "Miller", Status:"Busy"},
    {ID:3, Name: "Jones", Status:"Available"},
    {ID:4, Name: "Jamesc", Status:"Busy"}
  ]
 },
 {
  Region: "West", Members:[
  {ID:1, Name: "Ford", Status:"Available"},
  {ID:2, Name: "Miller", Status:"Busy"},
  {ID:3, Name: "Jones", Status:"Available"},
  {ID:4, Name: "Jamesc", Status:"Busy"}
     ]
    }
   ];
  }

  onProjectChange($event : any)
 {
  if($event.target.innerHTML == "Project A")
  {
     this.ProjectCost = 8348437;
     this.CurrentExpenditure = 934744;
     this.AvailableFunds = 7484;
  }
  else if($event.target.innerHTML == "Project B"){
    this.ProjectCost = 83437;
    this.CurrentExpenditure = 936744;
    this.AvailableFunds = 748;
  }else if($event.target.innerHTML == "Project C")
  {
    this.ProjectCost = 84030;
    this.CurrentExpenditure = 2392393;
    this.AvailableFunds = 73348;
  }else if($event.target.innerHTML == "Project D")
  {
    this.ProjectCost = 8430;
    this.CurrentExpenditure = 23923;
    this.AvailableFunds = 738;
  }
 }
}
