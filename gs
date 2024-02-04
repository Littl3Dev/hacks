--Public
repeat task.wait() until game:IsLoaded()

local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()
local GUI = OrionLib:MakeWindow({Name = "DevHub🔛🔝", HidePremium = true, IntroText = "DevHub", SaveConfig = false, ConfigFolder = "DevHub"})

GUI:MakeNotification{
	Name = "Thank you for choosing DevHub, for more information click on the other tab, with FNAF logo.",
	Callback = function() 
		game:IsLoaded()
	end
}
GUI:MakeNotification{
	Name = "Made by LittleDev",
	Callback = function() 
		game:IsLoaded()
	end
}

local vu = game:GetService("VirtualUser")
game:GetService("Players").LocalPlayer.Idled:connect(function()
	vu:Button2Down(Vector2.new(0,0),workspace.CurrentCamera.CFrame)
	wait(1)
	vu:Button2Up(Vector2.new(0,0),workspace.CurrentCamera.CFrame)
end)

GUI:MakeNotification{
	Name = "Anti-AFK activated",
	Callback = function() end
}

--Ghosts

local Mainhubg = {
	"Fairy",
	"Owl",
	"Businessman",
	"Street Cat",
	"Mechanic",
	"Garbage Bin",
	"Paper Bag Man",
	"Rat",
	"Pigeon",
	"Bandit",
	"Cowboy",
	"Scientist",
	"Zorg",
	"Miner",
	"Living Rock",
	"Pharaoh",
	"Mummy",
	"Pirate",
	"Parrot",
	"Diver",
	"Mermaid",
	"Islander",
	"Magma Monster",
	"Explorer",
	"Penguin"
}

local Ghostworldg = {
	"Jester",
	"Jelly",
	"Pinwheel",
	"Blue Ray",
	"Spooky",
	"Pixie",
	"Rogue",
	"Knight",
	"Wizard",
	"Horse",
	"Bongo Man",
	"Yellow Note",
	"DJ",
	"Purple Note",
	"Viney",
	"Blooming",
	"Adventurer",
	"Dragonfly"
}

local backdoorg = {
	"Swamp Dweller",
	"Firefly",
	"Frost Spirit",
	"Snowstorm",
	"Flutter Spirit",
	"Mushroom",
	"Water Spirit",
	"Glitcher",
	"Error 404",
	"Rock Crystal",
	"Farmer",
	"Crazy Cow",
	"Parasite",
	"Super Computer",
	"Digital Bandit",
	"Trojan Horse",
	"Honeydrop",
	"Bee",
	"Web Surfer",
	"Binary",
	"Byte",
	"Digi Cat",
	"Guardian",
	"Data Fury",
	"Programmer",
	"RAM"
}



--Bossesg
local mainhubb = {
	"Ghastly Tree",
	"George The Gorilla",
	"Sludge",
	"Subject One",
	"King Krab",
	"Magmoraug"
}

local ghostworldb = {
	"Grim",
	"The Great Guardian"
}

local backdoorb = {
	"Anomaly",
	"The Final Boss"
}

--Locals
local ghostN = nil
local ghostN2 = nil

local bossN = nil




--maps
local mainhub = 2685347741
local ghostworld = 4078003854
local backdoor = 4383092793
local bloxbyte = 5061426732



local Farm = GUI:MakeTab{
	Name = "Farm",
	Icon = "rbxassetid://8292007940",
	PremiumOnly = false
}

local Quest = GUI:MakeTab{
	Name = "Quest",
	Icon = "rbxassetid://82426641",
	PremiumOnly = false
}

local Bosses = GUI:MakeTab{
	Name = "Bosses",
	Icon = "rbxassetid://77095067",
	PremiumOnly = false
}

local Other = GUI:MakeTab{
	Name = "Other",
	Icon = "rbxassetid://9047121552",
	PremiumOnly = false
}

--farm
if game.PlaceId == mainhub then
	Farm:AddDropdown{
		Name = "Select the ghost you want to farm",
		Options = Mainhubg,
		Callback = function(v)
			ghostN = v
		end
	}

elseif game.PlaceId == ghostworld then
	Farm:AddDropdown{
		Name = "Select the ghost you want to farm",
		Options = Ghostworldg,
		Callback = function(v)
			ghostN = v
		end
	}
elseif game.PlaceId == backdoor then
	Farm:AddDropdown{
		Name = "Select the ghost you want to farm",
		Options = backdoorg,
		Callback = function(v)
			ghostN = v
		end
	}
end


Farm:AddToggle{
	Name = "AutoFarm",
	StartingState = false,
	Description = nil,
	Callback = function(state)
		local GhostsFolder = game.Workspace.Ghosts
		getgenv().autofarm = state
		GUI:MakeNotification{
			Name = "Please equip your vacuum in order to work",
			Callback = function() end
		}
		spawn(function()
			while autofarm == true do
				for i, v in pairs(workspace.Ghosts:GetChildren()) do
					if v.Name == ghostN and v:FindFirstChild("HumanoidRootPart") and autofarm == true then
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.HumanoidRootPart.CFrame * CFrame.new(0, 0, 5)
						local remote = game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumEnemy
						remote:FireServer(v)

					elseif ghostN == nil then
						GUI:MakeNotification{
							Name = "You have not selected a ghost yet.",
							Callback = function() end
						}
						wait(3)
					end
				end
				task.wait()
			end
		end)
	end
}


if game.PlaceId == mainhub then
	Farm:AddToggle{
		Name = "Autosell",
		Callback = function(state) 
			getgenv().autosell = state
			spawn(function()
				while getgenv().autosell == true do
					local player = game.Players.LocalPlayer
					local bLocation
					function teleport(loc)
						bLocation = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
						if game.Players.LocalPlayer.Character.Humanoid.Sit then
							game.Players.LocalPlayer.Character.Humanoid.Sit = false
						end
						wait()
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = loc
					end
					teleport(CFrame.new(211, -148, -1710)) --  MAIN WORLD ----  CFrame.new(211, -148, -1710)  GHOST WORLD ---  CFrame.new(123, -862, 6040)   ---- VOID  CFrame.new(-2, 257, -154)
					wait(2)
					teleport(bLocation)
					wait(10)
				end
			end)
		end}
elseif game.PlaceId == ghostworld then
	Farm:AddToggle{
		Name = "Autosell",
		Callback = function(state) 
			getgenv().autosell = state
			spawn(function()
				while getgenv().autosell == true do
					local player = game.Players.LocalPlayer
					local bLocation
					function teleport(loc)
						bLocation = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
						if game.Players.LocalPlayer.Character.Humanoid.Sit then
							game.Players.LocalPlayer.Character.Humanoid.Sit = false
						end
						wait()
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = loc
					end

					teleport(CFrame.new(123, -862, 6040)) --  MAIN WORLD ----  CFrame.new(211, -148, -1710)  GHOST WORLD ---  CFrame.new(123, -862, 6040)   ---- VOID  CFrame.new(-2, 257, -154)
					wait(2)
					teleport(bLocation)
					wait(10)
				end
			end)
		end}
elseif game.PlaceId == backdoor then
	Farm:AddToggle{
		Name = "Autosell",
		Callback = function(state) 
			getgenv().autosell = state
			spawn(function()
				while getgenv().autosell == true do
					local player = game.Players.LocalPlayer
					local bLocation
					function teleport(loc)
						bLocation = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
						if game.Players.LocalPlayer.Character.Humanoid.Sit then
							game.Players.LocalPlayer.Character.Humanoid.Sit = false
						end
						wait()
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = loc
					end

					teleport(CFrame.new(99.1463547, 278.861572, -744.693115, -0.945054948, 1.84763416e-09, -0.326911479, 3.85483538e-08, 1, -1.05786064e-07, 0.326911479, -1.12575549e-07, -0.945054948)) --  MAIN WORLD ----  CFrame.new(211, -148, -1710)  GHOST WORLD ---  CFrame.new(123, -862, 6040)   ---- VOID  CFrame.new(-2, 257, -154)
					wait(2)
					teleport(bLocation)
					wait(10)
				end
			end)
		end}    
end

Farm:AddToggle{
	Name = "Auto hit",
	StartingState = false,
	Description = nil,
	Callback = function(state) 
		getgenv().autohit = state
		spawn(function ()
			while autohit == true do
				local args = {
					[1] = workspace.Ghosts:FindFirstChild(ghostN)
				}                                    
				game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumFireHit:FireServer(unpack(args))
				task.wait() 
			end
		end)
	end}

Farm:AddToggle{
	Name = "Auto Antenna upgrade",
	Callback = function(state) 
		getgenv().autoantenna = state
		spawn(function ()
			while autoantenna == true do
				game:GetService("ReplicatedStorage").Network.ToServer.Requests.UpgradeAntenna:FireServer()
				task.wait()
			end 
		end)
	end
}


--quest
Quest:AddToggle{
	Name = "Auto start quests",
	Callback = function(state)
		getgenv().autostartquest = state
		spawn(function ()
			while autostartquest == true do
				for i = 1, 500 do
					local args = {
						[1] = i
					}

					game:GetService("ReplicatedStorage").Network.ToServer.Requests.StartQuest:FireServer(unpack(args))
					task.wait()
				end
			end
		end)
	end
}

Quest:AddToggle{
	Name = "Auto Claim Quest",
	Callback = function(state)
		getgenv().autoclaimquest = state
		spawn(function ()
			while autoclaimquest == true do
				for i = 1, 500 do
					local args = {
						[1] = i
					}

					game:GetService("ReplicatedStorage").Network.ToServer.Requests.AdvanceQuest:FireServer(unpack(args))
					task.wait()
				end
			end
		end)
	end
}

--bosses
if game.PlaceId == mainhub then
	Bosses:AddDropdown{
		Name = "Select boss",
		Options = mainhubb,
		Callback = function(v)
			bossN = v
		end
	}
elseif game.PlaceId == ghostworld then
	Bosses:AddDropdown{
		Name = "Select boss",
		Options = ghostworldb,
		Callback = function(v)
			bossN = v
		end
	}
elseif game.PlaceId == backdoor then
	Bosses:AddDropdown{
		Name = "Select boss",
		Options = backdoorb,
		Callback = function(v)
			bossN = v
		end
	}
end

Bosses:AddToggle{
	Name = "Bossfarm",
	Callback = function(state)
		local GhostsFolder = game.Workspace.Ghosts
		getgenv().bossfarm = state
		GUI:MakeNotification{
			Name = "If you are not tp'ing then the boss is not spawned yet, or dm me.",
			Callback = function() end
		}
		spawn(function()
			while bossfarm == true do
				for i, v in pairs(workspace.Ghosts:GetChildren()) do
					if v.Name == bossN and v:FindFirstChild("HumanoidRootPart") and bossfarm == true then
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.HumanoidRootPart.CFrame * CFrame.new(0, 0, 10)
						local remote = game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumEnemy
						remote:FireServer(v)

					elseif bossN == nil then
						GUI:MakeNotification{
							Name = "You have not selected the boss yet.",
							Callback = function() end
						}
						wait(3)
					end
				end
				task.wait()
			end
		end)
	end
}

Bosses:AddToggle{
	Name = "Auto hit boss",
	Callback = function(state) 
		getgenv().autohitboss = state
		GUI:MakeNotification{
			Name = "Use this featuer only with bosses with shield",
			Callback = function() end
		}
		spawn(function ()
			while autohitboss == true do
				local args = {
					[1] = workspace.Ghosts:FindFirstChild(bossN)
				}                                    
				game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumFireHit:FireServer(unpack(args))
				task.wait() 
			end
		end)
	end}

