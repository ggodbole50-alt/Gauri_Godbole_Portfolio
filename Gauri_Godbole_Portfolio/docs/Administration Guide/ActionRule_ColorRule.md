# Action Rule for Color
This action rule enables you to manage colors of the structural objects as per their category.
## General Information
This opening ID is invoked:
- When you create structural objects.
- When you edit the category of structural objects.
## Arguments
| Name | Type | 
| -- | -- |
| Input | Feature |
| ColorParameters | List |

## Sample

The following sample explains the action rule for applying colors as graphic property to structural objects.

```
let SFD_Panel(SldPanel)
let SFD_Plate(SldPlate)
let SFD_Profile(SldProfile)
let SFD_Opening(SldOpening)

let Category(String)
let RValue(Integer)
let GValue(Integer)
let BValue(Integer)

let IsPhysicalObject(Boolean)

set SFD_Panel = Input
set SFD_Plate = Input
set SFD_Profile = Input
set SFD_Opening = Input

if( NULL <> SFD_Panel)
{
	set IsPhysicalObject = SFD_Panel.IsPhysicalObject
	if(false == IsPhysicalObject)
	{
		set Category = SFD_Panel.Category
		if("SldPanel" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("ShellPanel" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("LongitudinalPanel" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 0
		}
		else if("DeckPanel" == Category )
		{
			RValue = 0
			GValue = 128
			BValue = 0
		}
		else if("TransversePanel" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("ParametricPanel" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 0
		}
		else if("SldSketchBasedPanel" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}		
	}	
}
else if( NULL <> SFD_Plate)
{
	set IsPhysicalObject = SFD_Plate.IsPhysicalObject
	if(false == IsPhysicalObject)
	{
		set Category = SFD_Plate.Category
		if("SldPanel" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("ShellPanel" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("LongitudinalPanel" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 0
		}
		else if("DeckPanel" == Category )
		{
			RValue = 0
			GValue = 128
			BValue = 0			
		}
		else if("TransversePanel" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("SldSketchBasedPlate" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("Bracket" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}		
	}		
}
else if( NULL <> SFD_Profile )
{
	set IsPhysicalObject = SFD_Profile.IsPhysicalObject
	if(false == IsPhysicalObject)
	{
		set Category = SFD_Profile.Category
		if("SldStiffener" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("DeckTransStiffener" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("DeckLongStiffener" == Category )
		{
			RValue = 211
			GValue = 178
			BValue = 125	
		}
		else if("TransBulkhdVerStiffener" == Category )
		{
			RValue = 211
			GValue = 178
			BValue = 125
		}
		else if("TransBulkhdHorStiffener" == Category )
		{
			RValue = 255
			GValue = 255
			BValue = 0
		}
		else if("LongBulkhdVerStiffener" == Category )
		{
			RValue = 211
			GValue = 178
			BValue = 125
		}
		else if("LongBulkhdHorStiffener" == Category )
		{
			RValue = 255
			GValue = 255
			BValue = 0
		}
		else if("ShellBotLongStiffener" == Category )
		{
			RValue = 255
			GValue = 255
			BValue = 0
		}
		else if("ShellBotTransStiffener" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("ShellVerStiffener" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("ShellLongStiffener" == Category )
		{
			RValue = 255
			GValue = 255
			BValue = 0
		}
		else if("FacePlate" == Category )
		{
			RValue = 0
			GValue = 0
			BValue = 255
		}
		else if("Beam" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("Brace" == Category )
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("Column" == Category )
		{
			RValue = 211
			GValue = 178
			BValue = 125
		}
		else if("Pillar" == Category )
		{
			RValue = 211
			GValue = 178
			BValue = 125
		}	
	}
}
else if( NULL <> SFD_Opening )
{
	set IsPhysicalObject = SFD_Opening.IsPhysicalObject
	if(false == IsPhysicalObject)
	{
		set Category = SFD_Opening.Category
		if("SldOpeningP" == Category)
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("SldOpeningPr" == Category)
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("LighteningHole" == Category)
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}
		else if("ManHole" == Category)
		{
			RValue = 0
			GValue = 255
			BValue = 255
		}	
	}
}

ColorParameters.Append(RValue)
ColorParameters.Append(GValue)
ColorParameters.Append(BValue)
```
















