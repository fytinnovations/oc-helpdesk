---
sidebarDepth: 3
---

# TicketList

The component displays the list of ticket created by the user. User has to be logged in to view the list of tickets.

## Properties

| Value          | Description                                                                                    | Default       | Required |
|----------------|------------------------------------------------------------------------------------------------|---------------|----------|
| detailsPage    | Name of the ticket details page.                                                               | ticket        | No       |
| creationPage   | Name of the ticket creation page.                                                              | ticket-create | No       |
| ticketsPerPage | Maximum number of tickets to display on the page.If the number exceeds pagination is generated | 5             | No       |

## Sample Page

```ini

title = "support"
url = "/support"
layout = "default"
description = "This page displays the ticket created by the user who is logged in."
is_hidden = 0

[ticketList]
detailsPage = "ticket"
creationPage = "ticket-create"
ticketsPerPage = 5
noTicketsMessage = "No tickets found"
==
<div class="jumbotron title-js">
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h1>Helpdesk</h1>
                <p>FYTInnovations Super Support Team ready to help you</p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    {% component 'ticketList' %}
</div>

```
