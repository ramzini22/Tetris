$("body").keydown(function(event){
	if((figure!=0 && n==0) || (fon%11==9 && $("#setti3").prop("checked"))){
		var ride=true;
		if(event.which==40) {for(var i=0;i<8;i+=2)if($("#e"+(figure[i]+1)+"_"+(figure[i+1])).attr("class")!="emptiness")ride=false;if(ride){for(var i=0;i<8;i+=2)$("#e"+(figure[i]++)+"_"+figure[i+1]).css("background-color", "" );for(var i = 0;i<8;i+=2)$("#e"+figure[i]+"_"+figure[i+1]).css("background-color",all_color[color%6] );ride=true}}
		
		else if(event.which==39){
			for(var i=0;i<8;i+=2)if($("#e"+figure[i]+"_"+(figure[i+1]+1)).attr("class")!="emptiness"){ride=false;break;}if(ride){for(var i=0;i<8;i+=2){$("#e"+figure[i]+"_"+figure[i+1]).css("background-color",  "");figure[i+1]++;}for(var i = 0;i<8;i+=2)$("#e"+figure[i]+"_"+figure[i+1]).css("background-color",all_color[color%6] );}}
	
		else if(event.which==37){
			for(var i=0;i<8;i+=2)if($("#e"+figure[i]+"_"+(figure[i+1]-1)).attr("class")!="emptiness"){ride=false;break;}if(ride){for(var i=0;i<8;i+=2){$("#e"+figure[i]+"_"+figure[i+1]).css("background-color",  "");figure[i+1]--;}for(var i = 0;i<8;i+=2)$("#e"+figure[i]+"_"+figure[i+1]).css("background-color",all_color[color%6] );}}

		else if(event.which==38 && !new_figure){
			for(var i=0;i<8;i+=2)$("#e"+figure[i]+"_"+figure[i+1]   ).css("background-color","");
			
			if(figure[8]==1 && $("#e"+ figure[2]+"_"+(figure[3]+1)).attr("class")=="emptiness"  &&  $("#e"+(figure[2]-1)+"_"+(figure[3]+1)).attr("class")=="emptiness"){figure[0]--;figure[1]+=2;figure[6]--;figure[8]++;}
			else if(figure[8]==2 && $("#e"+figure[2]+"_"+(figure[3]-1)).attr("class")=="emptiness" &&  $("#e"+(figure[2]+1)+"_"+(figure[3]+1)).attr("class")=="emptiness" ){figure[6]++;figure[0]++;figure[1]-=2;figure[8]--;}

			else if(figure[8]==3 && $("#e"+(figure[2]+1)+"_"+figure[3]).attr("class")=="emptiness"  &&  $("#e"+(figure[2]+1)+"_"+(figure[3]-1)).attr("class")=="emptiness"){figure[7]--;figure[0]+=2;figure[1]--;figure[8]++;}
			else if(figure[8]==4 && $("#e"+(figure[2]-1)+"_"+figure[3]).attr("class")=="emptiness" && $("#e"+(figure[2]+1)+"_"+(figure[3]+1)).attr("class")=="emptiness"){figure[0]-=2;figure[1]++;figure[7]++;figure[8]--;}
	
			else if(figure[8]==5 && $("#e"+(figure[2]-1)+"_"+figure[3]).attr("class")=="emptiness" && $("#e"+(figure[2]-2)+"_"+figure[3]).attr("class")=="emptiness" && $("#e"+(figure[2]-3)+"_"+figure[3]).attr("class")=="emptiness"){figure[0]--;figure[1]++;figure[4]-=2;figure[5]--;figure[6]-=3;figure[7]-=2;figure[8]++;}
			else if(figure[8]==6 && $("#e"+figure[2]+"_"+(figure[3]-1)).attr("class")=="emptiness" && $("#e"+figure[2]+"_"+(figure[3]+1)).attr("class")=="emptiness" && $("#e"+figure[2]+"_"+(figure[3]+2)).attr("class")=="emptiness"){figure[0]++;figure[1]--;figure[4]+=2;figure[5]++;figure[6]+=3;figure[7]+=2;figure[8]--;}
			
			else if(figure[8]==7 && $("#e"+figure[6]+"_"+(figure[7]-1)).attr("class")=="emptiness" && $("#e"+figure[6]+"_"+(figure[7]+1)).attr("class")=="emptiness"){figure[2]++;figure[0]+=2;figure[1]++;figure[8]++;}
			else if(figure[8]==8 && $("#e"+(figure[0]-1)+"_"+figure[1]).attr("class")=="emptiness" && $("#e"+(figure[4]-1)+"_"+figure[5]).attr("class")=="emptiness"){figure[0]--;figure[2]-=2;figure[3]++;figure[8]++;}
			else if(figure[8]==9 && $("#e"+figure[4]+"_"+(figure[5]-1)).attr("class")=="emptiness"){figure[2]++;figure[3]--;figure[8]++;}
			else if(figure[8]==10 && $("#e"+(figure[4]-1)+"_"+figure[5]).attr("class")=="emptiness"){figure[0]--;figure[1]--;figure[8]=7;}
			
			else if(figure[8]==11 && $("#e"+(figure[0]-1)+"_"+figure[1]).attr("class")=="emptiness" && $("#e"+(figure[0]-1)+"_"+(figure[1]+1)).attr("class")=="emptiness"){figure[4]-=2;figure[5]--;figure[6]-=2;figure[7]--;figure[8]++;}
			else if(figure[8]==12 && $("#e"+figure[0]+"_"+(figure[1]-1)).attr("class")=="emptiness" && $("#e"+figure[0]+"_"+(figure[1]-2)).attr("class")=="emptiness"){figure[4]++;figure[5]--;figure[6]++;figure[7]-=3;figure[8]++;}
			else if(figure[8]==13 && $("#e"+(figure[0]+1)+"_"+figure[1]).attr("class")=="emptiness" && $("#e"+figure[2]+"_"+(figure[3]-1)).attr("class")=="emptiness"){figure[4]++;figure[6]--;figure[7]+=2;figure[8]++;}
			else if(figure[8]==14 && $("#e"+figure[2]+"_"+(figure[3]+1)).attr("class")=="emptiness" && $("#e"+figure[2]+"_"+(figure[3]+2)).attr("class")=="emptiness"){figure[5]+=2;figure[6]+=2;figure[7]+=2;figure[8]=11;}
			
			else if(figure[8]==15 && $("#e"+figure[6]+"_"+(figure[7]-1)).attr("class")=="emptiness" && $("#e"+figure[6]+"_"+(figure[7]-2)).attr("class")=="emptiness"){figure[2]+=2;figure[3]--;figure[0]+=2;figure[1]--;figure[8]++;}
			else if(figure[8]==16 && $("#e"+figure[6]+"_"+(figure[7]+1)).attr("class")=="emptiness" && $("#e"+(figure[4]-1)+"_"+figure[5]).attr("class")=="emptiness"){figure[3]+=2;figure[0]-=2;figure[1]+=2;figure[8]++;}
			else if(figure[8]==17 && $("#e"+figure[4]+"_"+(figure[5]+1)).attr("class")=="emptiness" && $("#e"+figure[4]+"_"+(figure[5]+2)).attr("class")=="emptiness"){figure[2]--;figure[0]++;figure[1]+=2;figure[8]++;}
			else if(figure[8]==18  && $("#e"+(figure[4]-1)+"_"+figure[5]).attr("class")=="emptiness" && $("#e"+(figure[4]-1)+"_"+(figure[5]-1)).attr("class")=="emptiness"){figure[2]--;figure[3]--;figure[0]--;figure[1]-=3;figure[8]=15;}
			
			for(var i=0;i<8;i+=2)$("#e"+figure[i]+"_"+figure[i+1]   ).css("background-color",all_color[color%6]);}}});
			
