# q2smartforms
Smart jQuery library for full dynamic web forms

Demo:
http://q2.cz/clients/smartforms/

## Basic init:
  ```
  <form class="o-q2form">
   ...
  </form>
  ```
  
## Form element:
```
  <!-- Name input -->
       <div class="c-formElement" data-hint="Pro bezproblémovou registraci musíme znát Vaše jméno.">
            <input type="text" name="name" placeholder="Jan Novák" data-error="Musíte zadat Vaše jméno" required>
            <label for="name">Jméno</label>
       </div>
  <!-- end of name input -->
```

### Form can work with these input types:
  -	Text
  -	Number
  -	Email
  -	Tel
  -	Date
  -	Checkbox

### Checkbox element: + .u-check
  ```
  <div class="c-formElement u-check"> </div>
  ```
  
## Error messages
Types of error mesages:
- data-error -> default error data parameter
- data-format -> input type tel error message
- data-email -> input type email error message

```
<input type="email" name="email" data-error="Enter your email address" data-email="Your email adress is not in a correct format" required>
```

## Hint message box
Every formElement may contain own hint message box with (not able for checkbox formElement)
```
data-hint="My custom hint text"
```

```
<div class="c-formElement" data-hint="We need your phone number for easer communication">
…
</div>
```

## Input required parameter
- every input may be required
- after adding require parameter will be dynamiccaly added * into input label box
```
<input type="email" name="email" data-error="Enter your email address" data-email="Your email adress is not in a correct format" required>
```


