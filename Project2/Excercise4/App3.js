const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
//Question 1
let locationStart = "";

if (emblemClue1 === "Eagle")
{
  locationStart = "Forum";
}
else if (emblemClue1 === "Lion")
{
  locationStart = "Colosseum";
}
else
{
  locationStart = "Villa";
}

//Question 2
if (emblemClue2 === "Laurel" && locationStart === "Forum")
{
  locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa")
{
  locationStart += " of Pompey";
}

//Question 3
switch (emblemClue3)
{
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}

//Question 4
Using == (double equals) performs type coercion, meaning it tries to convert the operands to the same type before making the comparison. On the other hand, === (triple equals) checks both the value and the type, ensuring a stricter equality check. Using == can lead to unexpected results in certain situations due to type coercion.
