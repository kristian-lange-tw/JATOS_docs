---
title: Results
keywords: results
tags:
summary: The results pages (study, component or worker) presents all the data that were collected during the study runs, including the result data and meta data (e.g. worker ID, start time etc.). 
sidebar: mydoc_sidebar
permalink: Results.html
folder:
toc: true
last_updated: 27 Feb 2017
---

### Results View

Once you collected data for a study, you can see and manage the results by clicking on the study *Results* button. The component Results view is similar, so we describe the study Results view only. 

![Results Link](images/ResultsLink.png)

The image below is an example of the results for the Prisonner's Dilemma example study. There's quite a lot of information here, so we'll go through each piece.

![Results View screenshot](images/ResultsView Screenshot.png){:width="100%"}


### Interacting With The Results Table
JATOS displays results in the form of interactive tables. Here's what you can do in them:

#### Selecting Results
You'll notice that the first two results are selected (in dark blue) in the example. You can select/deselect specific results by clicking anywhere on the row. You can also use the buttons on the bar above to select all results in the table.

#### Filter Results
The filter lets you search all text in the whole results table (excluding the actual result data).  
If you type, for example, "Personal Single" in the *Filter Results* field, only the results ran by a Personal Single worker will appear on the table. You can then click on *Select Filtered* to select and then export only those results that you're interested in. All fields in the table are searchable and you can combine fields (e.g. by filtering for "Personal Single Finished"). 

#### View Component Results
Each study result has a little arrow on the left. If you click on it, the individual component results for the study will be displayed like in the bottom-most result of the screenshot above. 

#### Export 
Once you selected the results you're interested in, click *Export* and your browser will download a text file that contains your results in whatever format (text, csv, json) you stored them. Then read this text file with SPSS, Excel, Matlab, R or whatever program you use to analyze results.  

#### Delete
You can click *Delete* to remove all or only some selected results. Keep in mind **there's no undo function for this**. 


### Table Columns
You can show and hide the columns displayed in the table with the drop-down menu under the *Display Columns* button. 

#### Result ID 
An identifier assigned by JATOS to each study result. A study result is actually a group of component results, each of them with their own (different) *Component ID*. 

#### Start Time
Time (set at the server's time zone) at which the first component of the study was loaded. 

#### Last Seen
You can know how long each worker worked on a study by looking at the Duration field. However, *Duration* is given by the time when the study was finished and is therefore not available if a worker never finished the study and is either still working on it or just closed the browser tab. To distinguish these two situations, JATOS records by default a "heartbeat" from each component. The default period of the heartbeat is 2 minutes but you can change it thorugh a jatos.js [function](jatos.js-Reference.html#jatossetheartbeatperiodheartbeatperiod). The heartbeat is there while the component is loaded (i.e., the browser tab running the study is open) and stops either when the browser tab is closed, or when the study is finished.   

#### Duration
Simply the time difference between the study finish (the last command of the last component sent to the JATOS server) and the start of the first study component. It will display 'not yet' for studies that are not yet finished.  

#### Worker ID
Assigned by JATOS. Each unique worker has its own Worker ID. The JATOS worker will always have Worker ID 1. You can click on a Worker ID to see all the worker's results. 

As we said in the [Ethics and Privacy page](Data-Privacy-and-Ethics.html), keep in mind that MTurk workers with the same MTurk ID will have the same JATOS Worker ID. If you run two different studies in MTurk, chances are that some workers will take part in both studies. Because workers might not be aware that two different studies were done by the same experimenter, we recommend deleting the MTurk results from the server from the first study before running the second study. Alternatively, if you do want to link results from different studies, you should explicitly say so and obtain consent from your workers.  

#### Worker Type
Displays the [Worker type](Worker-Types.html) that ran the study. 

#### MTurk Worker ID
This is given by Amazon Mechanical Turk's platform, not by JATOS.

#### Group ID
Only available for group studies, like the Prisonner's Dilemma in the example.

#### State
Possible states are DATA_RETRIEVED, ABORTED, FINISHED 

#### Messages

