---
title: Run your Study with Study Links
slug: /Run-your-Study-with-Study-Links.html
sidebar_position: 2
---

The Study Links page is the place where you generate links for your particpants to run your study. You can also organize your participants into Batches and handle their results there. In earlier versions of JATOS it was called Worker and Batch Manager.

![Study Links Button screenshot](/img/study_links_1.png)

To get to the Study Links page press on the button with the same name in your study's page.


![Study Links page screenshot](/img/study_links_2.png)

This Study Links page has one Batch, the 'Default' one. A batch can have study links of different type, e.g. Personal Single, Personal Multiple etc.


## Study Links - How to let participants run your study

During development of your study you would usually run it with the "Run" button in the study page. But then, when you are done developing you want to let others run your study - you want participants (or workers as they are called in JATOS) do it. For this JATOS lets you create study links that you can hand out to your workers (e.g. via email or social media).

**Generate study links and hand them to your workers**

JATOS has different worker types (each with different properties, that are well explained on a dedicated page: [Worker Types](Worker-Types.html), and each worker type corresonds to a study link type.

![Study Links page screenshot](/img/study_links_3.png)

Click on the "<span class="glyphicon glyphicon-chevron-right"></span>" button in the left of each batch row to expand the study link types.

![Study Links page screenshot](/img/study_links_7.png)

You can de-/activate a study link type by clicking in this checkbox. Decactived types cannot be used to run a study. Always check before you send out study links that the corresponding types are activated.


### Personal type links

![Study Links page screenshot](/img/study_links_4.png)

Personal type links can be of type Personal Single or Personal Multiple ([more about the differences](Worker-Types.html)).

After clicking the Study Links button you can create and manage the study links of this type.

![Study Links page screenshot](/img/study_links_11.png)

1. This button creates one study link without a comment. This button is a shortcut to button '2'.
1. Lets you create several study links and lets you add a comment to them. The comment is only a hint for you that you can use to destinguish your study links. You can create Personal type study links in bulk by changing the **Amount** value.
1. This is your actual study link. Hand this to your workers. There are two links that can be toggled by a button: 1) The 'Open Directly' link starts the study right away. 2) The 'Confirm First' lets your worker confirm first with a button press.
1. Use this checkbox to de-/activate a single study link. A deactivated study link can not be used to start a study run (but an already started study run can continue).


### General type links

![Study Links page screenshot](/img/study_links_5.png)

General type links can be of type General Single or General Multiple ([more about the differences](Worker-Types.html)). Due to the nature of these types there is only one study link per type. Click on the button Study Link to get it. There are two links that can be toggled by a button: 1) The 'Open Directly' link starts the study right away. 2) The 'Confirm First' lets your worker confirm first with a button press.


### MTurk type links

![Study Links page screenshot](/img/study_links_6.png)

How to connect to MTurk and create study links is described in its own page: [Connect to Mechanical Turk](Connect-to-Mechanical-Turk.html).


## Batches - How to organize your workers

A batch is a collection of study links and their assoziated workers. Using different batches is useful to organize your study runs, separate their results and vary their setup. E.g. you could separate a pilot run from the "proper" experiment, or you could use different batches for different worker types.

Batches are organized in the Study Links page. Here you can create and delete batches, access each batch's properties and edit its **Batch Session Data** or look through their results.

Each study comes with a "Default" batch (although it can be renamed in its batch properties).

![Study Links page screenshot](/img/study_links_12.png)

You can **deactivate** or **activate** a batch by clicking on the checkbox button in each batch row. A deactivated batch doesn't allow any study runs.


### Batch Properties

Each batch has properties that can be changed: click on the Batch Properties button in each batch's row.

![Study Links page screenshot](/img/study_links_13.png)

* For each batch, you can limit the maximum number of workers that will ever be able to run a study in this batch by setting the **Maximum total workers**.

* Additionally you can switch on or off study link types in the **Allowed types**. Unchecked types are not allowed to run a study. This has the same effect as de-/activating the type in the batch. Always check before you send out study links that the corresponding types are activated.

* A batch can have a **JSON input** [similar to the one in the study or component properties](Write-your-own-Study-Basics-and-Beyond.html#study-json-input-and-component-json-input). The difference is that this one is only accessible from every study run in this batch.

* The **Group Properties** relate to [group studies](Write-Group-Studies-I-Setup.html#group-settings-in-each-batchs-properties).


### Groups

A batch is also the place where [JATOS groups](Write-Group-Studies-I-Setup.html) are handled. Here you can an get an overview of the Groups that belong to this batch: see what their member workers are or edit the **Group Session Data**.

![Groups table](/img/groups_view.png)

* **Active Workers** are the workers that are currently members in the group
* **Past Workers** the ones that were members at one point in the past
* **Results** shows only the study results that belong to this group
* **Group State** can be START, FINISHED, or FIXED
