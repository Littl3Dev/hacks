--Public
repeat task.wait() until game:IsLoaded()

local OrionLib = loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Orion/main/source'))()
local GUI = OrionLib:MakeWindow({Name = "DevHub🔛🔝", HidePremium = true, IntroText = "DevHub", SaveConfig = false, ConfigFolder = "DevHub"})

OrionLib:MakeNotification({
	Name = "DevHub",
	Content = "Thank you for choosing DevHub.",
	Image = "rbxassetid://12796195033",
	Time = 20
})

local vu = game:GetService("VirtualUser")
game:GetService("Players").LocalPlayer.Idled:connect(function()
	vu:Button2Down(Vector2.new(0,0),workspace.CurrentCamera.CFrame)
	wait(1)
	vu:Button2Up(Vector2.new(0,0),workspace.CurrentCamera.CFrame)
end)

OrionLib:MakeNotification({
	Name = "Alert",
	Content = "Anti-AFK enabled",
	Image = "rbxassetid://12796195033",
	Time = 5,
})

--Ghosts

local Mainhubg = ({
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
})

local Ghostworldg = ({
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
})

local backdoorg = ({
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
})



--Bossesg
local mainhubb = ({
	"Ghastly Tree",
	"George The Gorilla",
	"Sludge",
	"Subject One",
	"King Krab",
	"Magmoraug"
})

local ghostworldb = ({
	"Grim",
	"The Great Guardian"
})

local backdoorb = ({
	"Anomaly"
})

local bloxbytehqb = ({
        "Final Boss"
})
--Locals
local ghostN = nil
local ghostN2 = nil

local bossN = nil




--maps
local mainhub = 2685347741
local ghostworld = 4078003854
local backdoor = 4383092793
local bloxbyte = 5061426732



local Farm = GUI:MakeTab({
	Name = "Farm",
	Icon = "rbxassetid://8292007940",
	PremiumOnly = false
})

local Quest = GUI:MakeTab({
	Name = "Quest",
	Icon = "rbxassetid://82426641",
	PremiumOnly = false
})

local Bosses = GUI:MakeTab({
	Name = "Bosses",
	Icon = "rbxassetid://77095067",
	PremiumOnly = false
})

--farm
if game.PlaceId == mainhub then
	Farm:AddDropdown({
		Name = "Select the ghost you want to farm",
		Options = Mainhubg,
		Callback = function(v)
			ghostN = v
		end
	})

elseif game.PlaceId == ghostworld then
	Farm:AddDropdown({
		Name = "Select the ghost you want to farm",
		Options = Ghostworldg,
		Callback = function(v)
			ghostN = v
		end
	})
elseif game.PlaceId == backdoor then
	Farm:AddDropdown({
		Name = "Select the ghost you want to farm",
		Options = backdoorg,
		Callback = function(v)
			ghostN = v
		end
	})
end


Farm:AddToggle({
	Name = "AutoFarm",
	Callback = function(state)
		local GhostsFolder = game.Workspace.Ghosts
		_G.autofarm = state
		OrionLib:MakeNotification({
			Name = "Alert",
			Content = "Please equip your vacuum in order to work",
			Image = "rbxassetid://7634887655",
			Time = 5
		})
		spawn(function()
			while _G.autofarm == true do
				for i, v in pairs(workspace.Ghosts:GetChildren()) do
					if v.Name == ghostN and v:FindFirstChild("HumanoidRootPart") and _G.autofarm == true then
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.HumanoidRootPart.CFrame * CFrame.new(0, 0, 5)
						local remote = game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumEnemy
						remote:FireServer(v)

					elseif ghostN == nil then
						OrionLib:MakeNotification({
							Name = "Alert",
							Content = "You have not selected a ghost yet.",
							Image = "rbxassetid://7634887655",
							Time = 5
						})
						wait(3)
					end
				end
				task.wait()
			end
		end)
	end
})


if game.PlaceId == mainhub then
	Farm:AddToggle({
		Name = "Autosell",
		Callback = function(state) 
			_G.autosell = state
			spawn(function()
				while _G.autosell == true do
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
		end})
elseif game.PlaceId == ghostworld then
	Farm:AddToggle({
		Name = "Autosell",
		Callback = function(state) 
			_G.autosell = state
			spawn(function()
				while _G.autosell == true do
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
		end})
elseif game.PlaceId == backdoor then
	Farm:AddToggle({
		Name = "Autosell",
		Callback = function(state) 
			_G.autosell = state
			spawn(function()
				while _G.autosell == true do
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
		end})
end

Farm:AddToggle({
	Name = "Auto hit",
	Callback = function(state) 
		_G.autohit = state
		spawn(function ()
			while _G.autohit == true do
				local args = ({
					[1] = workspace.Ghosts:FindFirstChild(ghostN)
				})                                    
				game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumFireHit:FireServer(unpack(args))
				task.wait() 
			end
		end)
	end})

Farm:AddToggle({
	Name = "Auto Antenna upgrade",
	Callback = function(state) 
		_G.autoantenna = state
		spawn(function ()
			while _G.autoantenna == true do
				game:GetService("ReplicatedStorage").Network.ToServer.Requests.UpgradeAntenna:FireServer()
				task.wait()
			end 
		end)
	end
})


--quest
Quest:AddToggle({
	Name = "Auto start quests",
	Callback = function(state)
		_G.autostartquest = state
		spawn(function ()
			while _G.autostartquest == true do
				for i = 1, 500 do
					local args = ({
						[1] = i
					})

					game:GetService("ReplicatedStorage").Network.ToServer.Requests.StartQuest:FireServer(unpack(args))
					task.wait()
				end
			end
		end)
	end
})

Quest:AddToggle({
	Name = "Auto Claim Quest",
	Callback = function(state)
		_G.autoclaimquest = state
		spawn(function ()
			while _G.autoclaimquest == true do
				for i = 1, 500 do
					local args = ({
						[1] = i
					})

					game:GetService("ReplicatedStorage").Network.ToServer.Requests.AdvanceQuest:FireServer(unpack(args))
					task.wait()
				end
			end
		end)
	end
})

--bosses
if game.PlaceId == mainhub then
	Bosses:AddDropdown({
		Name = "Select boss",
		Options = mainhubb,
		Callback = function(v)
			bossN = v
		end
	})
elseif game.PlaceId == ghostworld then
	Bosses:AddDropdown({
		Name = "Select boss",
		Options = ghostworldb,
		Callback = function(v)
			bossN = v
		end
	})
elseif game.PlaceId == backdoor then
	Bosses:AddDropdown({
		Name = "Select boss",
		Options = backdoorb,
		Callback = function(v)
			bossN = v
		end
	})
elseif game.PlaceId == bloxbyte then
	Bosses:AddDropdown({
		Name = "Select boss",
		Options = bloxbytehqb,
		Callback = function(v)
			bossN = v
		end
	})
end

Bosses:AddToggle({
	Name = "Bossfarm",
	Callback = function(state)
		local GhostsFolder = game.Workspace.Ghosts
		_G.bossfarm = state
		spawn(function()
			while _G.bossfarm == true do
				for i, v in pairs(workspace.Ghosts:GetChildren()) do
					if v.Name == bossN and v:FindFirstChild("HumanoidRootPart") and _G.bossfarm == true then
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.HumanoidRootPart.CFrame * CFrame.new(0, 0, 10)
						local remote = game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumEnemy
						remote:FireServer(v)

					elseif bossN == nil then
						OrionLib:MakeNotification({
							Name = "Alert",
							Content = "You have not selected the boss yet.",
							Image = "rbxassetid://7634887655",
							Time = 5
						})
						wait(3)
					end
				end
				task.wait()
			end
		end)
	end
})

Bosses:AddToggle({
	Name = "Auto hit boss",
	Callback = function(state) 
		_G.autohitboss = state
		OrionLib:MakeNotification({
			Name = "Alert",
			Content = "Use this feature only with bosses with shield.",
			Image = "rbxassetid://7634887655",
			Time = 5
		})
		spawn(function ()
			while _G.autohitboss == true do
				local args = ({
					[1] = workspace.Ghosts:FindFirstChild(bossN)
				})                                    
				game:GetService("ReplicatedStorage").Network.ToServer.Requests.VacuumFireHit:FireServer(unpack(args))
				task.wait() 
			end
		end)
	end})





--MAIN WORLD ----  CFrame.new(211, -148, -1710)  GHOST WORLD ---  CFrame.new(123, -862, 6040)   ---- VOID  CFrame.new(-2, 257, -154)
--local mainhubs = "211, -148, -1710"
--local ghostworlds = "123, -862, 6040"
--local backdoors = "99.1463547, 278.861572, -744.693115, -0.945054948, 1.84763416e-09, -0.326911479, 3.85483538e-08, 1, -1.05786064e-07, 0.326911479, -1.12575549e-07, -0.945054948"

