---
sidebarDepth: 3
---

# TicketDetails

The component displays information such as status,title, category, type and priority. The component traces the entire history of the ticket, it also provides a comment box for the user to comment and upload images.This component also provides a close ticket button to close the ticket from the frontend when it is resolved.

## Sample Page

```ini

title = "ticket"
url = "/ticket/:ticket_id"
layout = "default"
description = "This page displays all the information and the entire history of a particular ticket"
is_hidden = 0

[ticketDetails]
==
<div class="container m-t-lg">
    {% component 'ticketDetails' %}
</div>

```
